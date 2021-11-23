var express = require("express");
var router = express.Router();
var { register } = require("../controllers/authctrl");
var {validRegister} = require("../middleware/valid")

router.get("/", function (req, res) {
  res.send("GET request to the homepage");
});

//Auth Routes
router.post("/register", validRegister, register);

module.exports = router;
