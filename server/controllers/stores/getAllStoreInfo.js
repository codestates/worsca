const Stores = require("../../dbconnector/Stores");

const getAllStoreInfo = async (req, res, next) => {
	try {
		const { storeList } = req.body;
		if (storeList.length === 0) {
			return res.json([]);
		}

		const stores = await Stores.findAll(storeList, { reviews: true });

		return res.json(stores);
	} catch (err) {
		next(err);
	}
};

module.exports = getAllStoreInfo;
