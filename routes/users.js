const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');
const AnimeTop = require('../models/AnimeTop');
const AnimeNew = require('../models/AnimeNew');

router.get('/', (req, res) => 
User.findAll()
    .then(users => { 
        console.log(users);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));

//Makeshift add route
router.get('/add', (req, res) => {
    const data = {
        username: 'bobmanbob',
        password: 'abc123',
    }

let { username, password } = data;

//Insert into table
User.create({
    username: username,
    password: password,
})
    .then(user => res.redirect('/users'))
    .catch(err => console.log(err));
});

module.exports = router;