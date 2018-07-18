const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
	restaurant: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
  punches: Number
})

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
