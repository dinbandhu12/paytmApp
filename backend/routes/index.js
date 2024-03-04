const express = require("express");
const userRouter = require("./user");
const accountRouter = require("./account");

// backend/routes/index.js
const router = express.Router();

// user router
router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;