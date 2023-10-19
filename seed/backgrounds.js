const db = require('../db')
const Background = require('../models/backgrounds.js')

db.on('error', console.error.bind(console, 'MongoDB Background connection error:'))

const main = async () => {
    const bgAcolyte = await new Background(
        { name: 'Acolyte', proficiency1: 'Insight', proficiency2: 'Religion' }
    )
    bgAcolyte.save()

    const bgCharlatan = await new Background(
        { name: 'Charlatan', proficiency1: 'Deception', proficiency2: 'Sleight of Hand' }
    )
    bgCharlatan.save()

    const bgCriminal = await new Background(
        { name: 'Criminal', proficiency1: 'Deception', proficiency2: 'Stealth' }
    )
    bgCriminal.save()

    const bgEntertainer = await new Background(
        { name: 'Entertainer', proficiency1: 'Acrobatics', proficiency2: 'Performance' }
    )
    bgEntertainer.save()

    const bgFolkHero = await new Background(
        { name: 'Folk Hero', proficiency1: 'Animal Handling', proficiency2: 'Survival' }
    )
    bgFolkHero.save()

    const bgGuildArtisan = await new Background(
        { name: 'Guild Artisan', proficiency1: 'Insight', proficiency2: 'Persuasion' }
    )
    bgGuildArtisan.save()

    const bgNoble = await new Background(
        { name: 'Noble', proficiency1: 'History', proficiency2: 'Persuasion' }
    )
    bgNoble.save()

    const bgOutlander = await new Background(
        { name: 'Outlander', proficiency1: 'Athletics', proficiency2: 'Survival' }
    )
    bgOutlander.save()

    const bgSage = await new Background(
        { name: 'Sage', proficiency1: 'Arcana', proficiency2: 'History' }
    )
    bgSage.save()

    const bgSoldier = await new Background(
        { name: 'Soldier', proficiency1: 'Athletics', proficiency2: 'Intimidation' }
    )
    bgSoldier.save()

    const bgUrchin = await new Background(
        { name: 'Urchin', proficiency1: 'Sleight of Hand', proficiency2: 'Stealth' }
    )
    bgUrchin.save()

}

const run = async () => {
    await main()
    // db.close()
}

run()