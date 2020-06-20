const express = require('express');
const router = express.Router();
const { AnimeGenHorror } = require('../database/models');
const axios = require('axios');

//Getting horror genre anime
router.get('/', (req, res) => {
    //need to replace api with horror anime
    const url = "https://api.jikan.moe/v3/top/anime/1/airing";
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
