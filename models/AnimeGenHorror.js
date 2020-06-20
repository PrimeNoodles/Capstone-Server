const Sequelize = require('sequelize');
const db = require('../config/database');

const AnimeGenHorror = db.define('animeGenHorror', {
    title: {
        type: Sequelize.STRING
    },
    image_url: {
        type: Sequelize.STRING
    },
    episodes: {
        type: Sequelize.INTEGER
    },
})

module.exports = AnimeGenHorror;