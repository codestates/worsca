const express = require("express");
const signUpController = require("../controllers/users/signUp");

const router = express.Router();

router.post("/signup", signUpController);

module.exports = router;
