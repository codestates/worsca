const { Bookmark } = require("../models");
const Users = require("./Users");

const find = async (userId, storeId) => {
	return await Bookmark.findOne({
		where: { user_id: userId, store_id: storeId },
	});
};

const add = async (email, storeId) => {
	const userId = await Users.getId(email);

	let bookmark = await find(userId, storeId);

	if (bookmark !== null && bookmark !== undefined) {
		return [bookmark, -1];
	}

	bookmark = await Bookmark.create({
		user_id: userId,
		store_id: storeId,
	});

	return [bookmark, 1];
};

const remove = async (email, storeId) => {
	const userId = await Users.getId(email);
	return await Bookmark.destroy({
		where: {
			user_id: userId,
			store_Id: storeId,
		},
	});
};

module.exports = {
	find,
	add,
	remove,
};
