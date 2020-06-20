const Sequelize = require('sequelize');
const db = require('../db');

const AnimeGenRomance = db.define("animeGenRomance", {

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

module.exports = AnimeGenRomance;
