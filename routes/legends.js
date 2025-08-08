const express = require('express');
const router = express.Router();
const Legend = require('../models/Legend');

router.post("/create", async (req, res) => {
    try {
        const nombre = req.body.nombre
        const alias = req.body.alias
        const numeroPartidos = req.body.numeroPartidos
        const goles = req.body.goles
        await Legend.create ({
            nombre: nombre,
            alias: alias,
            numeroPartidos: numeroPartidos,
            goles: goles
            })
            res.json({msg:'Created'})
    } catch (error) {
        console.error(error)
        return res.status(500).json({msg:error.message})
    }
})

router.get('/', async (req, res) => {
    try {
        const legends = await Legend.find({});
        res.json(legends);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

router.get('/:id', async (req, res) =>{
    try {
        const legends = await Legend.findById(req.params.id);
        if (!legends) return res.status(404).json({ message: 'Idolo no encontrado'});
        res.json(legends);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

module.exports = router;