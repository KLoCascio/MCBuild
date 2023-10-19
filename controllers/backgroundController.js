const Background  = require('../models/backgrounds.js')

async function getBackgrounds (req, res) {
    try {
        const backgrounds = await Background.find()
        res.status(200).send(backgrounds)
    } catch(e) {
        return res.status(500).json({ error: e.message})
    }
}

async function getBackgroundById(req, res) {
    try {
        const background = await Background.findById(req.params.id)
        res.status(200).send(background)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function createBackground(req, res) {
    try {
        const background = await Background(req.body)
        await background.save()
        return res.status(201).json({ background })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function updateBackground(req, res) {
    try {
        const id = req.params.id
        const background = await Background.findByIdAndUpdate(id, req.body, { new: true })
        if (background) {
            return res.status(201).json(background)
        }
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteBackground(req, res) {
    try {
        const id = req.params.id
        const background = await Background.findByIdAndDelete(id, req.body, { new: true })
        if (background) {
            return res.status(201).json(background)
        }

    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = {
    getBackgrounds,
    getBackgroundById,
    createBackground,
    updateBackground,
    deleteBackground
}