const Spell = require('../models/spells.js')

async function getSpells(req, res) {
    try {
        const spells = await Spell.find()
        res.json(spells)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = { getSpells }