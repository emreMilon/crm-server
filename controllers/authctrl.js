const UserModel = require("../models/User");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { generateActiveToken } = require("../config/generetaToken");
require("dotenv").config();
const activeToken = process.env.ACTIVE_TOKEN_SECRET;

exports.register = async (req, res) => {
  const user = await UserModel.findOne({ where: { email: req.body.email } });
  if (user)
    return res.status(400).json({ msg: "This email is already exists" });

  const password = await bcrypt.hash(req.body.password, 12);

  const { userId, firstName, lastName, position, email } = req.body;

  try {
    const newUser = {
      userId,
      firstName,
      lastName,
      position,
      email,
      password,
    };

    const activeToken = generateActiveToken({ newUser });

    res.json({
      status: "OK",
      msg: "Registered Successfully",
      data: newUser,
      activeToken,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.activeAccount = async (req, res) => {
  try {
    const { active_token } = req.body;

    const decoded = jwt.verify(active_token, `${activeToken}`);

    const { newUser } = decoded;
    if (!newUser)
      return res.status(400).json({ msg: "Invalid authentication" });

    const user = UserModel.build(newUser);
    await user.save();
    res.json({ msg: "Account has been activitated" });

    console.log(decoded);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
