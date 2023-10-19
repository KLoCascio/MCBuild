const db = require('../db')

const Race = require('../models/race.js')

db.on('error', console.error.bind(console, 'MongoDB Race connection error:'))

const main = async () => {
    const raceData = [
        { name: 'Human' },
        { name: 'Elf' },
        { name: 'Half-Elf'}
    ]
}

const run = async () => {
    await main()
    // db.close()
}

run()



// Human has no sub-race, Elf has High Elf/Wood Elf, Half-Elf has High Half-Elf, Wood Half-Elf, Drow Half-Elf

// Proficiencies change based on race. 

// Skills change based on race.
