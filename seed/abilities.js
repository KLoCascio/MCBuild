const db = require('../db')

const Ability = require('../models/abilities.js')

db.on('error', console.error.bind(console, 'MongoDB Abilities connection error:'))

const main = async () => {
    const Strength = await new Ability({
        name: 'Strength',
        value: 8
    })
    Strength.save()

    const Dexterity = await new Ability({
        name: 'Dexterity',
        value: 8
    })
    Dexterity.save()

    const Intelligence = await new Ability({
        name: 'Intelligence',
        value: 8
    })
    Intelligence.save()

    const Wisdom = await new Ability({
        name: 'Wisdom',
        value: 8
    })
    Wisdom.save()
    
    const Charisma = await new Ability({
        
    })
}

const run = async () => {
    await main()
    // db.close()
}

run()