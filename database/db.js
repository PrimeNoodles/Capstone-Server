const Sequelize = reqiore("sequelize");
const databaseName = require("../utils/databaseName");

// insert postgress link here
const db = new Sequelize(process.env.DATABASE_URL || ``, { logging: false });

module.exports = db;