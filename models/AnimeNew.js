const Sequelize = require('sequelize');
const db = require('../config/database');

const AnimeNew = db.define('animeNew', {
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

module.exports = AnimeNew;