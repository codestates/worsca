const db = require("../../models");

//DB에 store_id에 맞는 매장데이터가 없을경우 처음으로 데이터를 생성해주는 함수
const initStore = async (storeId, rating, decibel) => {
	if (storeId === undefined || rating === undefined || decibel === undefined) {
		return null;
	}

	const initialData = {
		store_id: storeId,
		owner_id: null,
		total_rating: rating,
		total_decibel: decibel,
		total_reviewers: 1,
	};

	return await db.Store.create(initialData);
};

const findStore = async (storeId) => {
	return await db.Store.findOne({
		where: { store_id: storeId },
		include: db.Review,
	});
};

module.exports = {
	initStore,
	findStore,
};
