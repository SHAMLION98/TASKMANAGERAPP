const express = require("express");
const { registerUser, loginUser } = require("../controller/userController");

const router = express.Router();

router.post("/api/user/register", registerUser).post("/user/login", loginUser);

module.exports = router;
