const Sequelize = require('sequelize');
const db = require('../config/database');

const AnimeTop = db.define('animeTop', {
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

module.exports = AnimeTop;