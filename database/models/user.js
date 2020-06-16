const Sequelize = reqiore("sequelize");
const db = require("../db");

const User = db.define("user",{
    userName: { type: Sequelize.STRING, allowNull: false },
    passWord: { type: Sequelize.STRING, allowNull: false },
});

module.expoets = User;