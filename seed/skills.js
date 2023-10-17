const db = require('../db/index')

const { Skills } = require('../models/skills.js')

db.on('error', console.error.bind(console, 'MongoDB Skills connection error:'))

const main = async () => {
    { }
}

const run = async () => {
    await main()
    db.close()
}

run()