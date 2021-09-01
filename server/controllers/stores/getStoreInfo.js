const Stores = require("../../dbconnector/Stores");

const getStoreInfo = async (req, res, next) => {
	const { storeId } = req.params;
	try {
		const store = await Stores.find(storeId, { reviews: true });
		res.json(store);
	} catch (err) {
		next(err);
	}
};

module.exports = getStoreInfo;
