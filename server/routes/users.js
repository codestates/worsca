const express = require("express");
const signUpController = require("../controllers/users/signUp");
const signInController = require("../controllers/users/signIn");
const deleteAccountController = require("../controllers/users/deleteAccount");

const router = express.Router();

router.post("/signup", signUpController);

router.post("/signin", signInController);

router.post("/deleteaccount", deleteAccountController);

module.exports = router;
