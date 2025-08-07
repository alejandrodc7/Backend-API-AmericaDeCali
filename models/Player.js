const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  number: { type: Number },
  age: { type: Number },
  nationality: { type: String },
  imageUrl: { type: String }
});


module.exports = mongoose.model('Player', playerSchema);