const mongoose = require('mongoose');

const legendsSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    alias: { type: String, required: true },
    numeroPartidos: { type: Number },
    goles: { type: Number }
});


module.exports = mongoose.model('Legend', legendsSchema);