const Sequelize = require('sequelize');
const db = require('../config/database');

const AnimeGenComedy = db.define('animeGenComedy', {
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

module.exports = AnimeGenComedy;