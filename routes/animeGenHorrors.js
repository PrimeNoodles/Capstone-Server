const express = require('express');
const router = express.Router();
const { AnimeGenHorror } = require('../database/models');
const axios = require('axios');

//Getting horror genre anime
router.get('/', (req, res) => {
    const url = "https://api.jikan.moe/v3/genre/anime/14/1";
    axios
        .get(url)
        .then((response) => {
            const animeGenHorrors = response.data.top;
            console.log(animeGenHorrors);
            res.status(200).json(animeGenHorrors);
        })
        .catch(err => console.log(err)); 
    });

//Attempting to bulk create a table to be used in a database
// AnimeGenAction.bulkCreate(title, image_url, episodes, {
//     returning: true})
//     .then(() => {
//         return AnimeGenAction.findAll();})
//     .then(animeGenActions => {
//         console.log(animeGenActions)
//     })
//     .catch(err => console.log(err));

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
