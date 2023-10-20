const Hero = require('../models/heroes.js')

async function getHeroes (req, res) {
    try {
        const heroes = await Hero.find()
        res.status(200).send(heroes)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getHeroById (req, res) {
    try {
        const hero = await Hero.findById(req.params.id)
        res.status(200).send(hero)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function createHero (req, res) {
    try {
        const hero = await Hero(req.body)
        await hero.save()
        return res.status(201).json({ hero })
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function updateHero (req, res) {
    try {
        const id = req.params.id
        const hero = await Hero.findByIdAndUpdate(id, req.body, { new: true })
        if(hero) {
            return res.status(201).json(hero)
        }
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteHero (req, res) {
    try {
        const id = req.params.id
        const hero = await Hero.findByIdAndDelete(id, req.body, { new: true })
        if(hero) {
            return res.status(201).json(hero)
        }

    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = { 
    getHeroes,
    getHeroById,
    createHero,
    updateHero,
    deleteHero
}