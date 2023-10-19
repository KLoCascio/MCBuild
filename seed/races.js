const db = require('../db')
const Race = require('../models/races.js')

db.on('error', console.error.bind(console, 'MongoDB Race connection error:'))

const main = async () => {
    const raceHuman = await new Race(
        {
            name: 'Human',
            racialWeapons: 'Pikes, Spears, Halberds, Glaives',
            racialArmour: 'Light Armour, Shields',
            racialPerk: 'Human Versatility:',
            perkDescription: 'You gain an additional Proficiency in a skill of your choosing. Your Carry Capacity is also increased by 25%.'
        }
    )
    raceHuman.save()

    const raceElf = await new Race(
        {
            name: 'Elf',
            racialWeapons: 'Longswords, Shortswords, Longbows, Shortbows',
            racialArmour: '',
            racialPerk: 'Fey Ancestry:',
            perkDescription: 'You have Advantage on Saving Throws against being Charmed, and you are immune to being placed under the Sleep status.'
        }
    )
    raceElf.save()

    const raceDrow = await new Race(
        {
            name: 'Drow',
            racialWeapons: 'Rapiers, Shortswords, Hand Crossbows',
            racialArmour: '',
            racialPerk: 'Fey Ancestry:',
            perkDescription: 'You have Advantage on Saving Throws against being Charmed, and you are immune to being placed under the Sleep status.'
        }
    )
    raceDrow.save()

    const raceHalfElf = await new Race(
        {
            name: 'Half-Elf',
            racialWeapons: 'Pikes, Spears, Halberds, Glaives',
            racialArmour: 'Light Armour, Shields',
            racialPerk: 'Fey Ancestry:',
            perkDescription: 'You have Advantage on Saving Throws against being Charmed, and you are immune to being placed under the Sleep status.'
        }
    )
    raceHalfElf.save()

    const raceHalfOrc = await new Race(
        {
            name: 'Half-Orc',
            racialWeapons: '',
            racialArmour: '',
            racialPerk: 'Savage Attacks:',
            perkDescription: 'When you land a Critical Hit with a melee weapon attack, you deal an extra dice of weapon damage.'
        }
    )
    raceHalfOrc.save()

    const raceHalfling = await new Race(
        {
            name: 'Halfling',
            racialWeapons: '',
            racialArmour: '',
            racialPerk: 'Halfling Luck:',
            perkDescription: 'When you roll a 1 for an Attack Roll, Ability Check, or Saving Throw, you can reroll the die and must use the new roll.'
        }
    )
    raceHalfling.save()

    const raceDwarf = await new Race(
        {
            name: 'Dwarf',
            racialWeapons: 'Battleaxes, HandAxes, Light Hammers, Warhammers',
            racialArmour: '',
            racialPerk: 'Dwarven Resilience:',
            perkDescription: 'You have Advantage on Saving Throws against Poison, and you have Resistance to Poison Damage.'
        }
    )
    raceDwarf.save()

    const raceGnome = await new Race(
        {
            name: 'Gnome',
            racialWeapons: '',
            racialArmour: '',
            racialPerk: 'Gnome Cunning:',
            perkDescription: 'You have Advantage on Intelligence, Wisdom and Charisma Saving Throws.'
        }
    )
    raceGnome.save()

}

const run = async () => {
    await main()
    // db.close()
}

run()