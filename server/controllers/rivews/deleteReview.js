const Reviews = require("../../dbconnector/Reviews");
const {
	sendNotFoundReview,
	sendUnauthorizedToken,
} = require("../../util/response");
const { verifyAuth } = require("../../auth/jwtToken");

const deleteReview = async (req, res, next) => {
	// Authorization 검사
	const user = verifyAuth(req.headers.authorization);
	if (user instanceof Error || user === null) {
		return sendUnauthorizedToken(res, user);
	}

	const { reviewId } = req.params;

	//삭제
	try {
		const result = await Reviews.removeById(reviewId);

		if (result === 0) {
			return sendNotFoundReview(res);
		}

		res.status(200).json({
			message: "리뷰가 삭제되었습니다.",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = deleteReview;
