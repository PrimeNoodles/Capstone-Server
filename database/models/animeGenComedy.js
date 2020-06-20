const Sequelize = require('sequelize');
const db = require('../db');

const AnimeGenComedy = db.define("animeGenComedy", {

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

module.exports = AnimeGenComedy;
