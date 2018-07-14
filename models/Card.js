const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  punches: Number,
  reqPunches: Number
})

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;