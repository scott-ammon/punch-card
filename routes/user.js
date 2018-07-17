const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const Card = require('../models/Card');
const User = require('../models/User');

// GET - Finds all cards associated with current user
router.post("/cards/all", (req, res) => {
  console.log("req.body is: ", req.body);
  User.findOne({email: req.body.user.email}).populate("cards").exec(function(err, user) {
    res.json(user.cards);
  })
})

// POST - Creates a card (TODO: Accept form values)
router.post("/cards", (req, res) => {
    User.findOne({email: req.body.user.email}, function(err, user) {
      Card.create({
          restaurant: req.body.restaurant,
          punches: 2,
          reqPunches: 6
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

// GET - Get's a specific card from the user's card array
router.post("/cards/:id", (req, res) => {
  User.findOne({email: req.body.user.email}).populate({
    path: "cards",
    match: {_id: req.params.id}
  }).exec(function(err, user) {
    res.json(user.cards);
  })
})

// DELETE - Removes a card from the current user's cards array.
router.delete("/cards/:id", (req, res) => {
  User.findByIdAndUpdate("5b4c5655fdd5f169c5e3a0d5", 
  {$pull: {cards: req.params.id}}, {new: true}, function(err, user) {
    console.log("err:", err);
    console.log("user:", user);
    res.json(user);
  });
});

module.exports = router;