const express = require('express');
const router = express.Router();
const Title = require('../models/Title');

router.post("/create", async (req, res) => {
    try {
        const anio = req.body.anio
        const equipo = req.body.equipo
        await Title.create ({
                anio: anio,
                equipo: equipo
            })
            res.json({msg:'Created'})
    } catch (error) {
        console.error(error)
        return res.status(500).json({msg:error.message})
    }
})

router.get('/', async (req, res) => {
    try {
        const titles = await Title.find({});
        res.json(titles);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

router.get('/:id', async (req, res) =>{
    try {
        const titles = await Title.findById(req.params.id);
        if (!titles) return res.status(404).json({ message: 'Jugador no encontrado'});
        res.json(titles);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

module.exports = router;