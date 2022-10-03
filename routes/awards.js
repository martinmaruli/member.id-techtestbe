
const router = require("express").Router();
const { getAll } = require("../controllers/awards");

router.post("/", getAll);

module.exports = router;