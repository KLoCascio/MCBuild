const Class = require('../models/classes.js')

async function getClasses(req, res) {
    try {
        const classes = await Class.find()
        res.json(classes)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = { getClasses }