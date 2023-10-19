const Cantrip = require('../models/cantrips.js')

async function getCantrips(req, res) {
    try {
        const cantrips = await Cantrip.find()
        res.status(200).send(cantrips)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getCantripById(req, res) {
    try {
        const cantrip = await Cantrip.findById(req.params.id)
        res.status(200).send(cantrip)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function createCantrip(req, res) {
    try {
        const cantrip = await Cantrip(req.body)
        await cantrip.save()
        return res.status(201).json({ cantrip })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function updateCantrip(req, res) {
    try {
        const id = req.params.id
        const cantrip = await Cantrip.findByIdAndUpdate(id, req.body, { new: true })
        if (cantrip) {
            return res.status(201).json(cantrip)
        }
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteCantrip(req, res) {
    try {
        const id = req.params.id
        const cantrip = await Cantrip.findByIdAndDelete(id, req.body, { new: true })
        if (cantrip) {
            return res.status(201).json(cantrip)
        }

    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = {
    getCantrips,
    getCantripById,
    createCantrip,
    updateCantrip,
    deleteCantrip,
}
