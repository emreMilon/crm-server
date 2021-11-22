const { DataTypes } = require("sequelize")
require("./connection.js")

const ForecastModel = sequelize.define(
    "Forecast", // model
    { // attribute
        userId = {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        repForecast: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        repForecastDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        manForecast: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        manForecastDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        manNote: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        manNoteDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },

    },
    { // option
        freezeTableName: true
    }
)

module.exports = ForecastModel;