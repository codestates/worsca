const { Store, Review } = require("../models");

//DB에 store_id에 맞는 매장데이터가 없을경우 처음으로 매장데이터를 생성해주는 함수
const init = async (storeId) => {
	if (storeId === undefined) {
		return null;
	}

	const initialData = {
		store_id: storeId,
		owner_id: null,
		total_rating: 0,
		total_decibel: 0,
		total_reviewers: 0,
	};

	return await Store.create(initialData);
};

// options = {
// 	reviews: boolean
// }
const find = async (storeId, options = {}) => {
	const include = [];

	if (options.reviews === true) {
		include.push(Review);
	}

	const store = await Store.findOne({
		where: { store_id: storeId },
		include,
	});

	return store === null
		? null
		: {
				store_id: store.store_id,
				owner_id: store.owner_id,
				total_rating: store.total_rating,
				total_decibel: store.total_decibel,
				total_reviewers: store.total_reviewers,
				reviews: store.Reviews,
		  };
};

const calculateReview = async () => {
	//리뷰 합 계산
	return await null;
};

module.exports = {
	init,
	find,
	calculateReview,
};
