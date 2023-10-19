const Race = require('../models/races.js')

async function getRaces(req, res) {
    try {
        const races = await Race.find()
        res.status(200).send(races)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getRaceById(req, res) {
    try {
        const race = await Race.findById(req.params.id)
        res.status(200).send(race)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function createRace(req, res) {
    try {
        const race = await Race(req.body)
        await race.save()
        return res.status(201).json({ race })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function updateRace(req, res) {
    try {
        const id = req.params.id
        const race = await Race.findByIdAndUpdate(id, req.body, { new: true })
        if (race) {
            return res.status(201).json(race)
        }
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteRace(req, res) {
    try {
        const id = req.params.id
        const race = await Race.findByIdAndDelete(id, req.body, { new: true })
        if (race) {
            return res.status(201).json(race)
        }

    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = { 
    getRaces,
    getRaceById,
    createRace,
    updateRace,
    deleteRace
}