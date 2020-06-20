const express = require('express');
const axios = require('axios');
const router = express.Router();

//api call for top airing
router.get('/', (req, res) => {
    const url = "https://api.jikan.moe/v3/genre/anime/14/1";
    axios
        .get(url)
        .then((response) => {
            const animeGenHorrors = response.data.anime;
            console.log(animeGenHorrors);
            res.status(200).json(animeGenHorrors);
        })
        .catch(err => console.log(err));

        
    });


module.exports = router;