const express = require("express");
const router = express.Router();
const user = require("./user");
const awards = require("./awards")

router.use("/user", user);
router.use("/awards", awards);

module.exports = router;