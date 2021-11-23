const {Sequelize, DataTypes} = require("sequelize")
require("dotenv").config()

const name = process.env.DATABASE_NAME;
const user = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

 const sequelize = new Sequelize(
    process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {host: "127.0.0.1", dialect: "mysql", operatorsAliases: false}
);

const UserModel = sequelize.define(
    "User", // model
    { // attribute
        userId : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { // option
        freezeTableName: true
    }
)

module.exports = UserModel;
