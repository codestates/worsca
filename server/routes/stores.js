const express = require("express");
const getStoreInfo = require("../controllers/stores/getStoreInfo");
const addReview = require("../controllers/rivews/addReview");
const updateReview = require("../controllers/rivews/updateReview");
const deleteReview = require("../controllers/rivews/deleteReview");

const router = express.Router();

router.get("/:storeId", getStoreInfo);

//review
router.post("/:storeId/reviews/:email", addReview);

router.put("/reviews/:reviewId", updateReview);

router.delete("/reviews/:reviewId", deleteReview);

module.exports = router;
