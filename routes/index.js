var express = require("express");
var router = express.Router();
var { register, activeAccount, login, logout, refreshToken } = require("../controllers/authctrl");
var {validRegister} = require("../middleware/valid")

router.get("/", function (req, res) {
  res.send("GET request to the homepage");
});

//Auth Routes
router.post("/register", validRegister, register);
router.post("/active", activeAccount );
router.post("/login", login);
router.get("/logout", logout);
router.get("/refresh_token", refreshToken)

module.exports = router;
