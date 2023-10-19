const Spell = require('../models/spells.js')

async function getSpells (req, res) {
    try {
        const spells = await Spell.find()
        res.status(200).send(spells)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getSpellById (req, res) {
    try {
        const spell = await Spell.findById(req.params.id)
        res.status(200).send(spell)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function createSpell (req, res) {
    try {
        const spell = await Spell(req.body)
        await spell.save()
        return res.status(201).json({ spell })
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function updateSpell (req, res) {
    try {
        const id = req.params.id
        const spell = await Spell.findByIdAndUpdate(id, req.body, { new: true })
        if(spell) {
            return res.status(201).json(spell)
        }
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteSpell (req, res) {
    try {
        const id = req.params.id
        const spell = await Spell.findByIdAndDelete(id, req.body, { new: true })
        if(spell) {
            return res.status(201).json(spell)
        }

    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = { 
    getSpells,
    getSpellById,
    createSpell,
    updateSpell,
    deleteSpell
}