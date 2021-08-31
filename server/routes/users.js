const express = require("express");
const signUpController = require("../controllers/users/signUp");
const signInController = require("../controllers/users/signIn");
const deleteAccountController = require("../controllers/users/deleteAccount");
const getMypageInfo = require("../controllers/users/getMypageInfo");

const router = express.Router();

router.get("/mypage/:email", getMypageInfo);

router.post("/signup", signUpController);

router.post("/signin", signInController);

router.delete("/:email", deleteAccountController);

module.exports = router;
