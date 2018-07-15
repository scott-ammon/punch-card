const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

router.get("/", (req, res) => {
    Restaurant.find({}, function(err, restaurants) {
        res.json({restaurants});
    })
})

router.get("/:id", (req, res) => {
    Restaurant.findOne({_id: req.params.id}, function(err, restaurant) {
      res.json({restaurant});
    })
})

module.exports = router;