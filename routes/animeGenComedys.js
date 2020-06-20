const express = require('express');
const axios = require('axios');
const router = express.Router();

//api call for top airing
router.get('/', (req, res) => {
    const url = "https://api.jikan.moe/v3/genre/anime/4/1";
    axios
        .get(url)
        .then((response) => {
            const animeComedys = response.data.anime;
            console.log(animeComedys);
            res.status(200).json(animeComedys);
        })
        .catch(err => console.log(err));

        
    });


module.exports = router;