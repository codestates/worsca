const { User, Store, Review } = require("../models");

// options = {
// 	stores: boolean,
// 	reviews: boolean,
// };
const find = async (userEmail, options = {}) => {
	const optionStore = {
		model: Store,
		attributes: {
			exclude: ["owner_id"],
		},
		through: {
			attributes: [],
		},
	};

	const optionReview = {
		model: Review,
	};

	const include = [];

	if (options.stores === true) include.push(optionStore);
	if (options.reviews === true) include.push(optionReview);
	const user = await User.findOne({
		where: { email: userEmail },
		attributes: ["email", "nickname"],
		include,
	});

	if (user === undefined || user === null) {
		return null;
	}

	const { email, nickname, Stores: stores, Reviews: reviews } = user;

	return { email, nickname, stores, reviews };
};

const matchPassword = async (email, password) => {
	if (email === undefined || password === undefined) {
		//잘못 입력
		return [null, -2];
	}
	const user = await User.findOne({
		where: { email },
	});

	if (user === undefined || user === null) {
		//해당 유저 없음
		return [null, 0];
	}

	if (user.password === password) {
		//비밀번호 일치
		return [user, 1];
	} else {
		//비밀번호 일치하지 않음
		return [user, -1];
	}
};

const add = async (email, password, nickname) => {
	try {
		return await User.create({
			email,
			password,
			nickname,
		});
	} catch (err) {
		throw err;
	}
};

const remove = async (email, password) => {
	const [user, result] = await matchPassword(email, password);

	if (result === 1) {
		await user.destroy();
	}

	return [user, result];
};

module.exports = {
	find,
	matchPassword,
	add,
	remove,
};
