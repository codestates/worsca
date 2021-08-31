const Reviews = require("../../dbconnector/Reviews");
const { sendNotFoundReview } = require("../../util/response");
const { validateBody } = require("../../util/validation");

const updateReview = async (req, res, next) => {
	const { reviewId } = req.params;
	const requirementKey = ["contents", "rating", "decibel"];

	if (!validateBody(req.body, ...requirementKey)) {
		return sendBadRequest(res);
	}

	try {
		const { contents, rating, decibel } = req.body;

		//Authorization검사

		//수정
		const review = await Reviews.update(reviewId, contents, rating, decibel);

		if (review === null) {
			sendNotFoundReview(res);
		}

		res.status(200).json({
			review,
			message: "리뷰가 성공적으로 수정되었습니다.",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = updateReview;
