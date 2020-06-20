const Sequelize = require('sequelize');
const db = require('../db');

const AnimeGenAction = db.define("animeGenAction", {

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  image_url: {
    type: Sequelize.STRING,
  },

  episodes: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
});

module.exports = AnimeGenAction;
