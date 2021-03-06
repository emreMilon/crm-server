// const {Sequelize, DataTypes} = require("sequelize")
 require("dotenv").config()
const name = process.env.DATABASE_NAME;
 const user = process.env.DATABASE_USERNAME;
 const password = process.env.DATABASE_PASSWORD;

//  const sequelize = new Sequelize(
//     name, user, password, {host: "localhost", dialect: "mysql", operatorsAliases: false}
// );
// sequelize
// .authenticate()
// .then(() => console.log("Successfully connected to database"))
// .catch((err) => console.log("Unable to connect to database", err));


// exports.module = sequelize

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: user,
  password: password
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

exports.model = con