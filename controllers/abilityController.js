const Ability = require('../models/abilities.js')

async function getAbilities (req, res) {
    try {
        const abilities = await Ability.find()
        res.status(200).send(abilities)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = { getAbilities }