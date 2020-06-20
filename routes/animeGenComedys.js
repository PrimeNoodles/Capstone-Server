const express = require('express');
const router = express.Router();
const { AnimeGenComedy } = require('../database/models');
const axios = require('axios');

//Getting comedy genre anime
router.get('/', (req, res) => {
    //need to replace api with comedy anime
    const url = "https://api.jikan.moe/v3/top/anime/1/airing";
    axios
        .get(url)
        .then((response) => {
            const animeGenComedys = response.data.top;
            console.log(animeGenComedys);
            res.status(200).json(animeGenComedys);
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
