const Reviews = require("../../dbconnector/Reviews");
const {
	sendNotFoundReview,
	sendUnauthorizedToken,
} = require("../../util/response");
const { verifyAuth } = require("../../auth/jwtToken");

const deleteReview = async (req, res, next) => {
	const { reviewId } = req.params;

	// Authorization 검사
	const userInToken = verifyAuth(req.headers.authorization);
	if (userInToken instanceof Error || userInToken === null) {
		return sendUnauthorizedToken(res, userInToken);
	}

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
