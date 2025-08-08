const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

require('dotenv').config()

app.use('/api/players', require('./routes/players'));
app.use('/api/titles', require('./routes/titles'));
app.use('/api/legends', require('./routes/legends'));
app.use('/api/stores', require('./routes/stores'));


mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log("conect to DB"))
.catch((err)=> console.error(err.message))
app.listen(process.env.PORT,()=>{
    console.log(`Escuchando en el puerto ${process.env.PORT}`)
})