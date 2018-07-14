const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

router.get("/", (req, res) => {
    Restaurant.find({}, function(err, restaurants) {
        res.json({restaurants});
    })
})

module.exports = router;