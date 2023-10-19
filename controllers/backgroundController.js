const { Background } = require('../models/background.js')

module.exports = {
    getBackgrounds,
    // createBackground,
    // updateBackground,
    // deleteBackground
}

async function getBackgrounds (req, res) {
    try {

    } catch(e) {
        return res.status(500).json({ error: e.message})
    }
}