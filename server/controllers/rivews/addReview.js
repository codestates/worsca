const Reviews = require("../../dbconnector/Reviews");
const Stores = require("../../dbconnector/Reviews");
const { sendBadRequest } = require("../../util/response");
const { validateBody } = require("../../util/validation");

const addReview = async (req, res, next) => {
	const { storeId, email } = req.params;
	const requirementKey = ["contents", "rating", "decibel"];

	if (!validateBody(req.body, ...requirementKey)) {
		return sendBadRequest(res);
	}

	try {
		const { contents, rating, decibel } = req.body;

		//Authorization 확인

		let store = Stores.findById(storeId);

		if (store === undefined || store === null) {
			store = Stores.init(storeId);
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
