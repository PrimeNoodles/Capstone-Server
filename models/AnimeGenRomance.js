const Sequelize = require('sequelize');
const db = require('../config/database');

const AnimeGenRomance = db.define('animeGenRomance', {
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

module.exports = AnimeGenRomance;