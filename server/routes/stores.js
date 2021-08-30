const express = require("express");
const addReview = require("../controllers/rivews/addReview");
const updateReview = require("../controllers/rivews/updateReview");
const deleteReview = require("../controllers/rivews/deleteReview");

const router = express.Router();

router.post("/:storeId/reviews/:email", addReview);

router.put("/reviews/:reviewId", updateReview);
router.delete("/reviews/:reviewId", deleteReview);

module.exports = router;
