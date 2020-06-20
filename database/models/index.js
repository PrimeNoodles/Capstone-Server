// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const User = require('./user');
const AnimeTop = require('./animeTop');
const AnimeNew = require('./animeNew');
const AnimeGenAction = require('./animeGenAction');

module.exports = {
  User,
  AnimeTop,
  AnimeNew,
  AnimeGenAction,
};
