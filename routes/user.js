const router = require("express").Router();
const { getOne, register, login } = require("../controllers/user");
const { isLogin } = require("../middleware/user");

router.get("/", isLogin, getOne);
router.post("/register", register);
router.post("/login", login);

module.exports = router;