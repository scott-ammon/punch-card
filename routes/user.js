const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const Card = require('../models/Card');
const User = require('../models/User');

// GET - Finds all cards associated with current user
router.get("/cards", (req, res) => {
  User.findOne({email: "xy@xy.com"}).populate("cards").exec(function(err, user) {
    res.json(user.cards);
  })
})

// POST - Creates a card (TODO: Accept form values)
router.post("/cards", (req, res) => {
    User.findOne({email: "xy@xy.com"}, function(err, user) {
      console.log(user);
      Card.create({
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
router.get("/cards/:id", (req, res) => {
  User.findOne({email: "xy@xy.com"}).populate({
    path: "cards",
    match: {_id: req.params.id}
  }).exec(function(err, user) {
    res.json(user.cards);
  })
})

// DELETE - Removes a card from the current user's cards array.
router.delete("/cards/:id", (req, res) => {
  User.findOne({email: "xy@xy.com"}, function(err, user) {
    user.update({
      $pull: {cards: {$in: [req.params.id]}}
    })
  })
})

module.exports = router;