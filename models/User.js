const { DataTypes } = require("sequelize")
require("./connection.js")

const UserModel = sequelize.define(
    "User", // model
    { // attribute
        userId = {
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
