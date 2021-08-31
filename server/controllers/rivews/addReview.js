const Reviews = require("../../dbconnector/Reviews");
const Stores = require("../../dbconnector/Stores");
const {
	sendBadRequest,
	sendUnauthorizedToken,
} = require("../../util/response");
const { validateBody } = require("../../util/validation");
const { verifyAuth } = require("../../auth/jwtToken");

const addReview = async (req, res, next) => {
	try {
		// Authorization 검사
		const user = verifyAuth(req.headers.authorization);
		if (user instanceof Error || user === null) {
			return sendUnauthorizedToken(res, user);
		}

		if (!validateBody(req.body, "contents", "rating", "decibel")) {
			return sendBadRequest(res);
		}

		const { storeId } = req.params;
		const { contents, rating, decibel } = req.body;

		let store = await Stores.find(storeId);

		if (store === undefined || store === null) {
			store = await Stores.init(storeId);
		}

		let [review, result] = await Reviews.add(
			user.email,
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
