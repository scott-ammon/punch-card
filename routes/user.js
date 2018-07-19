const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const Card = require('../models/Card');
const User = require('../models/User');

// GET - Finds all cards associated with current user
router.post("/cards/all", (req, res) => {
  User.findOne({email: req.body.user.email}).populate("cards").exec(function(err, user) {
    res.json(user.cards);
  })
})

// POST - Creates a card (TODO: Accept form values)
router.post("/cards", (req, res) => {
    User.findOne({email: req.body.user.email}, function(err, user) {
      Card.create({
          restaurant: req.body.restaurant,
          punches: 0
      }, function(err, card) {
          user.cards.push(card._id)
          user.save(function(err) {
              if (err) {
                  console.log(err);
              } else {
                res.sendStatus(200)
              }
          })
      })  
    })
})

// POST- Get's a specific card from the user's card array
router.post("/cards/:id", (req, res) => {
  User.findOne({email: req.body.user.email}).populate({
    path: "cards",
    match: {_id: req.params.id}
  }).exec(function(err, user) {
    res.json(user.cards);
  })
})

// PUT - Checks user input against Restaurant code
router.put("/cards/:id", (req, res) => {
  Restaurant.findOne({_id: req.body.restaurantId}, function(err, restaurant) {
    // If code is correct, this punches the user's card
    if (restaurant.authenticated(req.body.rewardCode)) {
      // Adds punch to card if the card is not full
      if (req.body.punches < req.body.reqPunches) {
        Card.findOneAndUpdate({_id: req.params.id}, {punches: req.body.punches + 1}, {new: true}, function(err, card) {
          res.json(card)
        })
        // Resets the card if it has been fully punched
      } else {
        Card.findOneAndUpdate({_id: req.params.id}, {punches: 0}, {new: true}, function(err, card) {
            res.json(card)
        })
      }
    // If user input failed to authenticate, sends back an invalid message
    } else {
      res.json({error: "Invalid Code"})
    }
  })
})

// DELETE - Removes a card from the current user's cards array.
router.delete("/cards/:id/:user", (req, res) => {
  User.findByIdAndUpdate(req.params.user, 
  {$pull: {cards: req.params.id}}, {new: true}, function(err, user) {
    Card.findByIdAndRemove(req.params.id, function(err, card) {
      if (err) {
        console.log(err)
      } else {
        res.sendStatus(200);
      }
    });
  });
})

module.exports = router;