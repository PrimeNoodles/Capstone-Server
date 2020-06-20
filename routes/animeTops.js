const express = require('express');
const axios = require('axios');
const router = express.Router();

//api call for top airing
router.get('/', (req, res) => {
    const url = "https://api.jikan.moe/v3/top/anime/1/airing";
    axios
        .get(url)
        .then((response) => {
            const animeTops = response.data.top;
            console.log(animeTops);
            res.status(200).json(animeTops);
        })
        .catch(err => console.log(err));

        
    });


module.exports = router;