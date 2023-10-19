const Background  = require('../models/backgrounds.js')

async function getBackgrounds (req, res) {
    try {
        const backgrounds = await Background.find()
        res.json(backgrounds)
    } catch(e) {
        return res.status(500).json({ error: e.message})
    }
}

module.exports = {
    getBackgrounds,
    // createBackground,
    // updateBackground,
    // deleteBackground
}