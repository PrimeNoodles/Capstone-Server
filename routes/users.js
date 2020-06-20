const express = require('express');
const router = express.Router();
const { User } = require('../database/models');

router.get('/', function(req, res, next) {
  User.findAll()
    .then(users => res.json(users))
    .catch(err => console.log(err))
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
