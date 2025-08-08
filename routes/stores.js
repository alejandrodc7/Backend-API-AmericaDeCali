const express = require('express');
const router = express.Router();
const Store = require('../models/Store');

router.post("/create", async (req, res) => {
    try {
        const name = req.body.name
        const direccion = req.body.direccion
        const horario = req.body.horario
        const whatsapp = req.body.whatsapp
        await Store.create ({
                name: name,
                direccion: direccion,
                horario: horario,
                whatsapp: whatsapp
            })
            res.json({msg:'Created'})
    } catch (error) {
        console.error(error)
        return res.status(500).json({msg:error.message})
    }
})

router.get('/', async (req, res) => {
    try {
        const stores = await Store.find({});
        res.json(stores);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

router.get('/:id', async (req, res) =>{
    try {
        const stores = await Store.findById(req.params.id);
        if (!stores) return res.status(404).json({ message: 'Jugador no encontrado'});
        res.json(stores);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

module.exports = router;