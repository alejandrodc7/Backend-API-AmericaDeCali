const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.post("/create", async (req, res) => {
    try {
        const name = req.body.name
        const position = req.body.position
        const number = req.body.number
        const age = req.body.age
        const nationality = req.body.nationality
        const imageUrl = req.body.imageUrl
        await Player.create ({
                name:name,
                position:position,
                number:number,
                age:age,
                nationality:nationality,
                imageUrl:imageUrl
            })
            res.json({msg:'Created'})
    } catch (error) {
        console.error(error)
        return res.status(500).json({msg:error.message})
    }
})

router.get('/', async (req, res) => {
    try {
        const players = await Player.find({});
        res.json(players);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

router.get('/:id', async (req, res) =>{
    try {
        const player = await Player.findById(req.params.id);
        if (!player) return res.status(404).json({ message: 'Jugador no encontrado'});
        res.json(player);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

module.exports = router;