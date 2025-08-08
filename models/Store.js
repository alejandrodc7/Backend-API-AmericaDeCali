const mongoose = require('mongoose');

const storesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  direccion: { type: String, required: true },
  horario: { type: String, required: true },
  whatsapp: { type: Number }
});


module.exports = mongoose.model('Store', storesSchema);