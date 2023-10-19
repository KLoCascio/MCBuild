const Class = require('../models/classes.js')

async function getHeroClasses(req, res) {
    try {
        const classes = await Class.find()
        res.status(200).send(classes)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getHeroClassById(req, res) {
    try {
        const heroClass = await HeroClass.findById(req.params.id)
        res.status(200).send(heroClass)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function createHeroClass(req, res) {
    try {
        const heroClass = await HeroClass(req.body)
        await heroClass.save()
        return res.status(201).json({ heroClass })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function updateHeroClass(req, res) {
    try {
        const id = req.params.id
        const heroClass = await HeroClass.findByIdAndUpdate(id, req.body, { new: true })
        if (heroClass) {
            return res.status(201).json(heroClass)
        }
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteHeroClass(req, res) {
    try {
        const id = req.params.id
        const heroClass = await HeroClass.findByIdAndDelete(id, req.body, { new: true })
        if (heroClass) {
            return res.status(201).json(heroClass)
        }

    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = { 
    getHeroClasses,
    getHeroClassById,
    createHeroClass,
    updateHeroClass,
    deleteHeroClass
}