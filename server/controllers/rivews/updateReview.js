const Reviews = require("../../dbconnector/Reviews");
const Stores = require("../../dbconnector/Stores");

const {
	sendNotFoundReview,
	sendUnauthorizedToken,
} = require("../../util/response");
const { validateBody } = require("../../util/validation");
const { verifyAuth } = require("../../auth/jwtToken");

const updateReview = async (req, res, next) => {
	try {
		// Authorization 검사
		const user = verifyAuth(req.headers.authorization);
		if (user instanceof Error || user === null) {
			return sendUnauthorizedToken(res, user);
		}

		const { reviewId } = req.params;

		if (!validateBody(req.body, "contents", "rating", "decibel")) {
			return sendBadRequest(res);
		}

		const { contents, rating, decibel } = req.body;

		//수정
		const review = await Reviews.update(
			reviewId,
			contents,
			rating,
			decibel,
			user.email
		);

		if (review === null) {
			return sendNotFoundReview(res);
		}

		await Stores.calculateReview(review.store_id);

		res.status(200).json({
			review,
			message: "리뷰가 수정되었습니다.",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = updateReview;
