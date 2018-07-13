require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// note: sending errors as json objects to front since React
// doesn't send full error messages in minified production
// build to reduce data transmitted...

router.post('/signup', (req, res) => {
  // See if email is already in database
  User.findOne({email: req.body.email}, function(err, user) {
    if(user) {
      res.json({
          error: true,
          status: 401,
          message: 'An account with this email already exists.'
        });
    } else {
      // If email not taken, create user in database
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }, function(err, user) {
        // check for any DB errors
        if(err) {
          console.log("Error creating user", err);
          res.status(401).json(err)
        } else {
          // log the user in (sign a new token)
          var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24
          });
          // return user and token to React app
          res.json({user, token});
        }
      });
    }
  });
});

router.post('/login', (req, res) => {
  // Look up user in database
  User.findOne({email: req.body.email}, function(err, user) {
    if(user) {
        // log them in (sign a token)
        if (user.authenticated(req.body.password)) {
          var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
            expiresIn: 60 * 60 *24
          })
          res.json({user, token});
        } else {
          res.json({
            error: true,
            status: 401,
            message: 'Email or password is incorrect'
          });
        }
    } else {
      // if user isn't in database
      res.json({
        error: true,
        status: 401,
        message: 'Account not found.'
      });
    }
  });
});

router.post('/me/from/token', (req, res) => {
  let token = req.body.token;
  // Check for token
  if (!token) {
    // Token was not sent
    res.status(401).json({
      error: true,
      message: "You must pass a token."
    });
  } else {
    // Validate the token
    jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
      if(err) {
        res.status(401).json(err);
      } else {
        // Look up user in db
        User.findById(user._id, function(err, user) {
          if(err) {
            res.status(401).json(err);
          } else {
            // send the user and the token back to the React app
            res.json({user, token});
          }
        });
      }
    });
  }
});

module.exports = router;