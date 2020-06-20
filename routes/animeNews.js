const express = require('express');
const axios = require('axios');
const router = express.Router();

//api call for top airing
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


module.exports = router;