const Ability = require('../models/abilities.js')

async function getAbilities (req, res) {
    try {
        const allAbilities = await Ability.find()
        res.status(200).send(allAbilities)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = { getAbilities }