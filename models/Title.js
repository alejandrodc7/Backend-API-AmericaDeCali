const mongoose = require('mongoose');

const titlesSchema = new mongoose.Schema({
  anio: { type: Number },
  equipo: { type: String, required: true }
});


module.exports = mongoose.model('Title', titlesSchema);