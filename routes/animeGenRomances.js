const express = require('express');
const axios = require('axios');
const router = express.Router();

//api call for top airing
router.get('/', (req, res) => {
    const url = "https://api.jikan.moe/v3/genre/anime/26/1";
    axios
        .get(url)
        .then((response) => {
            const animeGenRomances = response.data.anime;
            console.log(animeGenRomances);
            res.status(200).json(animeGenRomances);
        })
        .catch(err => console.log(err));

        
    });


module.exports = router;