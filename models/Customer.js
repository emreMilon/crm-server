const { DataTypes } = require("sequelize")
require("./connection.js")

const CustomerModel = sequelize.define(
    "User", // model
    { // attribute
        customerNumber = {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        studioName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        zipCode: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    { // option
        freezeTableName: true
    }
)

module.exports = CustomerModel;
