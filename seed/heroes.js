const db = require('../db')
const Hero = require('../models/heroes.js')

db.on('error', console.error.bind(console, 'MongoDB Hero connection error:'))

const main = async () => {
    const newHero = await new Hero(
        {
            chosenName: 'Chalupacabras',
            chosenRace: 'Human',
            chosenClass: 'Bard',
            chosenCantrip: 'Mage Hand',
            chosenSpells: 'Command',
            chosenBackground: 'Criminal'
        }
    )

    await Hero.insertMany(newHero)

}

const run = async () => {
    await main()
    // db.close()
}

run()