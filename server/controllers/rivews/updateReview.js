const db = require("../../models");
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
		const review = await db.Review.findOne({
			where: { id: reviewId },
		});
		review.contents = contents;
		review.rating = rating;
		review.decibel = decibel;
		review.createdAt = new Date();
		review.save();

		res.status(200).json({
			review,
			message: "수정 완료",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = updateReview;
