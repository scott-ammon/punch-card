const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const Card = require('../models/Card');
const User = require('../models/User');

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