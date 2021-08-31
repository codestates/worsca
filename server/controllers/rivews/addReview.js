const Reviews = require("../../dbconnector/Reviews");
const Stores = require("../../dbconnector/Reviews");
const {
	sendBadRequest,
	sendUnauthorizedToken,
} = require("../../util/response");
const { validateBody } = require("../../util/validation");
const { verifyAuth } = require("../../auth/jwtToken");

const addReview = async (req, res, next) => {
	const { storeId, email } = req.params;
	const requirementKey = ["contents", "rating", "decibel"];

	if (!validateBody(req.body, ...requirementKey)) {
		return sendBadRequest(res);
	}

	try {
		const { contents, rating, decibel } = req.body;

		// Authorization 검사
		const userInToken = verifyAuth(req.headers.authorization);
		if (userInToken instanceof Error || userInToken === null) {
			return sendUnauthorizedToken(res, userInToken);
		}

		let store = Stores.findById(storeId);

		if (store === undefined || store === null) {
			store = await Stores.init(storeId);
		}

		let [review, result] = await Reviews.add(
			email,
			storeId,
			contents,
			rating,
			decibel
		);

		if (result === -1) {
			return res.status(409).json({
				review,
				message: "이미 리뷰를 작성했습니다.",
			});
		}

		//result === 1;
		res.status(201).json({
			review,
			message: "리뷰 작성됨",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = addReview;
