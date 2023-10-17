const db = require('../db')

const { Class } = require('../models/class.js')

db.on('error', console.error.bind(console, 'MongoDB Class connection error:'))



const run = async () => {
    await main()
    db.close()
}

run()