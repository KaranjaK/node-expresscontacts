const express = require("express");
const { registerUser, logninUser, currentUser } = require("../controllers/userContoller");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", logninUser);

router.get("/current", currentUser);

module.exports = router;

