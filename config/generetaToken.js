const jwt = require("jsonwebtoken");
require("dotenv").config();

const activeToken = process.env.ACTIVE_TOKEN_SECRET;
const accessToken = process.env.ACCESS_TOKEN_SECRET;
const refreshToken = process.env.REFRESH_TOKEN_SECRET;

exports.generateActiveToken = (payload) => {
  return jwt.sign(payload, `${activeToken}`, { expiresIn: "5m" });
};

exports.generateAccessToken = (payload) => {
  return jwt.sign(payload, `${accessToken}`, { expiresIn: "15m" });
};

exports.generateRefreshToken = (payload) => {
  return jwt.sign(payload, `${refreshToken}`, { expiresIn: "30d" });
};
