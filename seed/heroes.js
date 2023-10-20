const db = require('../db')
const Hero = require('../models/heroes.js')

db.on('error', console.error.bind(console, 'MongoDB Hero connection error:'))

const main = async () => {
    const newHero = await new Hero(
        {
            chosenName: 'Chalupacabras',
            chosenRace: race._id,
            chosenClass: class._id,
            chosenCantrip: cantrip_id,
            chosenSpells: spells._id,
            chosenBackground: background._id
        }
    )

    await Hero.insertMany(newHero)

}

const run = async () => {
    await main()
    // db.close()
}

run()