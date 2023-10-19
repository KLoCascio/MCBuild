const Cantrip = require('../models/cantrips.js')

async function getCantrips(req, res) {
    try {
        const cantrips = await Cantrip.find()
        res.json(cantrips)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = {
    getCantrips,
    // createCard,
    // updateCantrips,
    // deleteCantrips,
}
