const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Card = require('../models/Card');

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  img: String,
  reward: String,
  genre: String,
  lat: Number,
  lng: Number,
  rewardCode: String,
})

restaurantSchema.set("toObject", {
    transform: function(doc, ret, options) {
      let returnJson = {
        _id: ret._id,
        name: ret.name,
        reward: ret.reward,
        lat: ret.lat,
        lng: ret.lng
      }
      return returnJson;
    }
  });

  restaurantSchema.methods.authenticated = function(rewardCode) {
    return bcrypt.compareSync(rewardCode, this.rewardCode)
  }

  restaurantSchema.pre("save", function(next) {
    if (this.isNew) {
      let hash = bcrypt.hashSync(this.rewardCode, 12)
      this.rewardCode = hash;
    }
    next();
  })

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;