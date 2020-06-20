const Sequelize = require('sequelize');
const db = require('../config/database');

const AnimeGenAction = db.define('animeGenAction', {
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

module.exports = AnimeGenAction;