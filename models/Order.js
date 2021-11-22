const { DataTypes } = require("sequelize")
require("./connection.js")


const OrderModel = sequelize.define(
    "Order", // model
    { // attribute
        userId = {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        studioName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customerNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        zipCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        projectName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        possibility: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        orderValue: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        propertyValue: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lastDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        touchPoints: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    { // option
        freezeTableName: true
    }
)

module.exports = OrderModel;
