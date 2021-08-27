const express = require("express");
const signUpController = require("../controllers/users/signUp");
const signInController = require("../controllers/users/signIn");

const router = express.Router();

router.post("/signup", signUpController);

router.post("/signin", signInController);

module.exports = router;
