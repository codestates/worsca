const db = require("../../models");
const { sendBadRequest } = require("../../util/response");
const { validateBody } = require("../../util/validation");
const stores = require("../stores/stores");

const addReview = async (req, res, next) => {
	const { storeId, email } = req.params;
	const requirementKey = ["contents", "rating", "decibel"];

	if (!validateBody(req.body, ...requirementKey)) {
		return sendBadRequest(res);
	}

	try {
		const { contents, rating, decibel } = req.body;

		//Authorization 확인

		//이미 리뷰 작성했는지 확인
		let review = await db.Review.findOne({
			where: { store_id: storeId, user_email: email },
		});

		if (review) {
			return res.status(409).json({
				store: await stores.findStore(storeId),
				message: "이미 리뷰를 작성했습니다.",
			});
		}

		let store = await stores.findStore(storeId);
		console.log(store.dataValues);
		if (store === undefined || store === null) {
			store = await stores.initStore(storeId, rating, decibel);
		}

		review = await db.Review.create({
			user_email: email,
			store_id: storeId,
			contents,
			rating,
			decibel,
			createdAt: new Date(),
			updatedAt: new Date(),
		});

		res.status(201).json({
			review,
			message: "리뷰 작성됨",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = addReview;
