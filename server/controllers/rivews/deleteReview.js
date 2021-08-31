const Reviews = require("../../dbconnector/Reviews");
const { sendNotFoundReview } = require("../../util/response");

const deleteReview = async (req, res, next) => {
	const { reviewId } = req.params;

	//Authorization 검사

	//삭제
	try {
		const result = await Reviews.removeById(reviewId);

		if (result === 0) {
			sendNotFoundReview(res);
		}

		res.status(200).json({
			message: "리뷰가 성공적으로 삭제되었습니다.",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = deleteReview;
