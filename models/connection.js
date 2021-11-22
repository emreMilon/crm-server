const {Sequelize, DataTypes} = require("sequelize")

const name = process.env.DATABASE_NAME;
const user = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

 const sequelize = new Sequelize(
    name, user, password, {host: "127.0.0.1", dialect: "mysql", operatorsAliases: false}
    //'CRM', 'root', 'Dsvgh6083..', {host: "127.0.0.1", dialect: "mysql", operatorsAliases: false}
);
sequelize
.authenticate()
.then(() => console.log("Successfully connected to database"))
.catch((err) => console.log("Unable to connect to database", err));


exports.module = sequelize