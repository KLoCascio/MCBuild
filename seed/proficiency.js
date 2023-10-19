const db = require('../db')

const Proficiency = require('../models/proficiency.js')

db.on('error', console.error.bind(console, 'MongoDB Proficiencies connection error:'))

const main = async () => {
    const humanProficiencies = [
        { race: Human, }

    ]
}

const run = async () => {
    await main()
    // db.close()
}

run()

// race: id proficiencies? use id of race
// maybe, click human loads up human (attached proficiencies) and the 


// // WEAPONS
// Clubs
// Daggers
// Handaxes
// Javelins
// Light Hammers
// Maces
// Sickles
// Quarterstaves
// Spears
// Greatclubs
// Flails
// Morningstars
// Rapiers
// Scimitars
// Shortswords
// War Picks
// Battleaxes
// Longswords
// Tridents
// Warhammers
// Glaives
// Greatswords
// Halberds
// Mauls
// Pikes
// Light Crossbows 
// Shortbows 
// Hand Crossbows 
// Heavy Crossbows 
// Longbows 

// // ARMOR
// Light Armour
// Medium Armour
// Heavy Armour
// Shields

// Musical Instruments, Spellcasting, Saving Throws and Skills