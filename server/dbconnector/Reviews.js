const { Review } = require("../models");

const findById = async (id) => {
	return await Review.findOne({ where: { id } });
};

const findByEmailAndStore = async (email, storeId) => {
	return await Review.findOne({
		where: {
			user_email: email,
			store_id: storeId,
		},
	});
};

const add = async (email, storeId, contents, rating, decibel) => {
	let review = await findByEmailAndStore(email, storeId);

	//리뷰 이미 작성함
	if (review !== undefined && review !== null) {
		return [review, -1];
	}

	//리뷰 작성
	review = await Review.create({
		user_email: email,
		store_id: storeId,
		contents,
		rating,
		decibel,
		createdAt: new Date(),
		updatedAt: new Date(),
	});

	return [review, 1];
};

const update = async (id, contents, rating, decibel) => {
	const review = await findById(id);
	if (review === undefined || review === null) {
		return null;
	}
	review.contents = contents;
	review.rating = rating;
	review.decibel = decibel;
	review.save();

	return review;
};

const removeById = async (id) => {
	return await Review.destroy({
		where: { id },
	});
};

const removeByEmailAndStore = async (email, storeId) => {
	return await Review.destroy({
		where: {
			user_email: email,
			store_id: storeId,
		},
	});
};

module.exports = {
	add,
	findById,
	findByEmailAndStore,
	update,
	removeById,
	removeByEmailAndStore,
};
