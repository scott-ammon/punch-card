const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const Card = require('../models/Card');
const User = require('../models/User');

// GET - Finds all cards associated with current user
router.get("/cards", (req, res) => {
  User.findOne({email: req.body.email}).populate("cards").exec(function(err, user) {
    res.json({user});
  })
})

// POST - Creates a card (TODO: Accept form values)
router.post("/cards", (req, res) => {
    User.findOne({email: "x@x.com"}, function(err, user) {
      console.log(user);
      Card.create({
          punches: 0,
          reqPunches: 5
      }, function(err, card) {
          console.log(card);
          user.cards.push(card._id)
          user.save(function(err) {
              if (err) {
                  console.log(err);
              }
          })
      })  
    })
})

module.exports = router;