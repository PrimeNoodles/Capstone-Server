const express = require('express');
const router = express.Router();
const { AnimeNew } = require('../database/models');
const axios = require('axios');

//Getting new airing anime
router.get('/', (req, res) => {
    const url = "https://api.jikan.moe/v3/top/anime/1/upcoming";
    axios
        .get(url)
        .then((response) => {
            const animeNews = response.data.top;
            console.log(animeNews);
            res.status(200).json(animeNews);
        })
        .catch(err => console.log(err)); 
    });

//Attempting to bulk create a table to be used in a database
// AnimeNews.bulkCreate(title, image_url, episodes, {
//     returning: true})
//     .then(() => {
//         return AnimeTop.findAll();})
//     .then(animeTops => {
//         console.log(animeTops)
//     })
//     .catch(err => console.log(err));

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
