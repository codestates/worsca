const stores = require("./stores");

const getStoreInfo = async (req, res, next) => {
	const { storeId } = req.params;
	try {
		const store = await stores.findStore(storeId);
		res.json({
			store_id: store.store_id,
			owner_id: store.owner_id,
			total_rating: store.total_rating,
			total_decibel: store.total_decibel,
			total_reviewers: store.total_reviewers,
			reviews: store.Reviews,
		});
	} catch (err) {
		next(err);
	}
};

module.exports = getStoreInfo;
