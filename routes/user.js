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

// GET - Get's a specific card from the user's card array
router.post("/cards/:id", (req, res) => {
  User.findOne({email: req.body.user.email}).populate({
    path: "cards",
    match: {_id: req.params.id}
  }).exec(function(err, user) {
    res.json(user.cards);
  })
})

router.put("/cards/:id", (req, res) => {
  // Find a restaurant by id passed in
  // Restaurant.findOne({_id: req.body.restaurantId}, function(err, restaurant) {
  //   if (restaurant.authenticated(req.body.rewardCode)) {
  //     if (req.body.punches < req.body.reqPunches) {
  //       Card.findOneAndUpdate({_id: req.params.id}, {punches: req.body.punches + 1}, {new: true}, function(err, card) {
  //           if (err) {
  //             console.log(err)
  //           } else {
  //             if (req.body.punches === req.body.reqPunches -1) {
  //               res.json({
  //                 success: "You have completed your card! Your Code is: 93203948",
  //                 card
  //               })
  //             } else {
  //               res.json(card)
  //             }
  //           }
  //       })
  //     } else {
  //       Card.findOneAndUpdate({_id: req.params.id}, {punches: 0}, {new: true}, function(err, card) {
  //         if (err) {
  //           console.log(err)
  //         } else {
  //           res.json(0)
  //         }
  //       })
  //     }
  //   } else {
  //     res.json({error: "Invalid Code"})
  //   }
  // })
  Restaurant.findOne({_id: req.body.restaurantId}, function(err, restaurant) {
    if (restaurant.authenticated(req.body.rewardCode)) {
      if (req.body.punches < req.body.reqPunches) {
        Card.findOneAndUpdate({_id: req.params.id}, {punches: req.body.punches + 1}, {new: true}, function(err, card) {
          res.json(card)
        })
      } else {
        Card.findOneAndUpdate({_id: req.params.id}, {punches: 0}, {new: true}, function(err, card) {
            res.json(card)
        })
      }
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