const { sequelize, Store, Review } = require("../models");
const { Op } = require("sequelize");

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
		include.push({ model: Review, as: "reviews" });
	}

	const store = await Store.findOne({
		where: { store_id: storeId },
		include,
	});

	return store;
};

const findAll = async (storeIdList, options = {}) => {
	const include = [];

	if (options.reviews === true) {
		include.push({ model: Review, as: "reviews" });
	}

	const storeList = await Store.findAll({
		where: {
			store_id: {
				[Op.or]: storeIdList,
			},
		},
		include,
	});

	return storeList;
};

//리뷰 합 계산
const calculateReview = async (store_id) => {
	const result = await Review.findOne({
		where: {
			store_id,
		},
		attributes: [
			[sequelize.fn("COUNT", sequelize.col("store_id")), "total_reviewers"],
			[sequelize.fn("SUM", sequelize.col("rating")), "total_rating"],
			[sequelize.fn("SUM", sequelize.col("decibel")), "total_decibel"],
		],
	});

	const { total_reviewers, total_rating, total_decibel } = result.dataValues;

	await Store.update(
		{ total_reviewers, total_rating, total_decibel },
		{
			where: {
				store_id,
			},
		}
	);
	return result;
};

module.exports = {
	init,
	find,
	calculateReview,
	findAll,
};
