const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  tabsPunched: Number,
  requiredPunches: Number,
  expirationDate: Number,
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;

Card.findOne({
  title: 'Fahrenheit 451'
}).populate('User').exec(function(err, card) {
  console.log(err, card);
});
