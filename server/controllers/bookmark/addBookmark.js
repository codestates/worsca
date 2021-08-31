const Bookmarks = require("../../dbconnector/Bookmark");
const Stores = require("../../dbconnector/Stores");
const { verifyAuth } = require("../../auth/jwtToken");
const {
	sendUnauthorizedToken,
	sendBadRequest,
} = require("../../util/response");
const { validateBody } = require("../../util/validation");

const addBookmark = async (req, res, next) => {
	try {
		const user = verifyAuth(req.headers.authorization);
		if (user instanceof Error || user === null) {
			return sendUnauthorizedToken(res, user);
		}

		if (!validateBody(req.body, "store_id")) {
			return sendBadRequest(res);
		}

		const { store_id } = req.body;

		let store = await Stores.find(store_id);

		if (store === undefined || store === null) {
			store = await Stores.init(store_id);
		}

		const [bookmark, result] = await Bookmarks.add(user.email, store_id);

		if (result === -1) {
			return res.status(409).json({
				message: "이미 해당 매장이 북마크목록에 있습니다.",
			});
		}

		res.status(201).json({
			message: "해당 매장을 북마크목록에 추가했습니다.",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = addBookmark;
