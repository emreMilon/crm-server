var express = require("express");
var router = express.Router();
var { register } = require("../controllers/authctrl");

router.get("/", function (req, res) {
  res.send("GET request to the homepage");
});

//Auth Routes
router.post("/register", register);

module.exports = router;
