const Bookmarks = require("../../dbconnector/Bookmark");
const { verifyAuth } = require("../../auth/jwtToken");
const {
	sendUnauthorizedToken,
	sendBadRequest,
} = require("../../util/response");
const { validateBody } = require("../../util/validation");

const deleteBookmark = async (req, res, next) => {
	try {
		const user = verifyAuth(req.headers.authorization);
		if (user instanceof Error || user === null) {
			return sendUnauthorizedToken(res, user);
		}

		if (!validateBody(req.body, "store_id")) {
			return sendBadRequest(res);
		}

		const { store_id } = req.body;
		const result = await Bookmarks.remove(user.email, store_id);

		if (result === 0) {
			return res.status(404).json({
				message: "해당 매장은 북마크목록에 없습니다.",
			});
		}

		return res.json({
			message: "북마크목록에서 해당 매장을 삭제하였습니다.",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = deleteBookmark;
