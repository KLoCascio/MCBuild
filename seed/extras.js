const db = require('../db')

const Extras = require('../models/extras.js')

db.on('error', console.error.bind(console, 'MongoDB Extras connection error:'))



const run = async () => {
    await main()
    // db.close()
}

run()