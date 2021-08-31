const express = require("express");
const signUpController = require("../controllers/users/signUp");
const signInController = require("../controllers/users/signIn");
const deleteAccountController = require("../controllers/users/deleteAccount");
const getMypageInfo = require("../controllers/users/getMypageInfo");
const addBookmark = require("../controllers/bookmark/addBookmark");
const deleteBookmark = require("../controllers/bookmark/deleteBookmark");

const router = express.Router();

router.get("/mypage/:email", getMypageInfo);

router.post("/signup", signUpController);

router.post("/signin", signInController);

router.delete("/", deleteAccountController);

//bookmark
router.post("/bookmarks", addBookmark);

router.delete("/bookmarks", deleteBookmark);

module.exports = router;
