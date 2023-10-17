const db = require('../db')

const { Abilities } = require('../models/abilities.js')

db.on('error', console.error.bind(console, 'MongoDB Abilities connection error:'))

const run = async () => {
    await main()
    db.close()
}

run()