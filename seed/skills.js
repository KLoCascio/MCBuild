const db = require('../db')
const Skill = require('../models/skills.js')

db.on('error', console.error.bind(console, 'MongoDB Skills connection error:'))

const main = async () => {
    const proficiencyArray = await new Skill(
        { skills: ['Athletics', 'Acrobatics', 'Sleight of Hand', 'Stealth'] }
    )
    proficiencyArray.save()

    const weaponArray = await new Skill(
        { skills: ['Clubs', 'Daggers', 'Handaxes', 'Javelins', 'Light Hammers', 'Maces', 'Sickles', 'Quarterstaves', 'Spears', 'Greatclubs', 'Flails', 'Morningstars', 'Rapiers', 'Scimitars', 'Shortswords', 'War Picks', 'Battleaxes', 'Longswords', 'Tridents', 'Warhammers', 'Glaives', 'Greatswords', 'Halberds', 'Mauls', 'Pikes', 'Light Crossbows' , 'Shortbows ', 'Hand Crossbows ', 'Heavy Crossbows', 'Longbows'] }
    )
    weaponArray.save()

    const armourArray = await new Skill(
        { skills: ['Light Armour', 'Medium Armour', 'Heavy Armour', 'Shields'] }
    )
    armourArray.save()

}

const run = async () => {
    await main()
    // db.close()
}

run()