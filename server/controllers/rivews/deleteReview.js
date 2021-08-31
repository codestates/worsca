const db = require("../../models");

const deleteReview = async (req, res, next) => {
	const { reviewId } = req.params;

	//Authorization 검사

	//삭제
	try {
		await db.Review.destroy({
			where: { id: reviewId },
		});

		res.status(200).json({
			message: "삭제 완료",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = deleteReview;
