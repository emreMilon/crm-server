const UserModel = require("../models/User");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const user = await UserModel.findOne({ where: { email: req.body.email } });
  if (user)
    return res.status(400).json({ msg: "This email is already exists" });

  const passwordHash = await bcrypt.hash(req.body.password, 12);

  try {
    const newUser = await UserModel.create({
      userId: req.body.userId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      position: req.body.position,
      email: req.body.email,
      password: passwordHash,
    });

    res.json({
      status: "OK",
      msg: "Registered Successfully",
      data: newUser,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
