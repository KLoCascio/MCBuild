const db = require('../db')
const Class = require('../models/classes.js')

db.on('error', console.error.bind(console, 'MongoDB Class connection error:'))

const main = async () => {
    const Barbarian = await new Class({
        classIcon: '../assets/classes/Barbarian.png',
        classDescription: 'Barbarians use their martial prowess and primal rage to strengthen themselves and dominate enemies in combat. Main Ability Scores are Strength, Dexterity and Constituion',
        action: 'Rage',
        actionIcon: '../assets/actions/Rage.png',
        actionDescription: 'While Raging, you are stronger and you deal 2 extra damage with melee and improvised weapons, and when throwing objects. You have Resistance to physical damage and Advantage on Strength Checks and Saving Throws.'
    })
    Barbarian.save()
    
    const Bard = await new Class({
        classIcon: '../assets/classes/Bard.png',
        classDescription: 'Bards are expert storytellers, artists, and performers. Bards channel their power through song, speech, or performance to cast Spells. Main Ability Score is Charisma.',
        action: 'Bardic Inspiration',
        actionIcon: '../assets/actions/Bardic_Inspiration.png',
        actionDescription: 'This ability allows a Bard to inspire their allies and influence the outcome of their rolls. Inspire an ally to go beyond their capabilities with your performance. They add a +1d6 bonus to their next Attack Roll, Ability Check or Saving Throw.'
    })
    Bard.save()
    
    const Cleric = await new Class({
        classIcon: '../assets/classes/Cleric.png',
        classDescription: 'Clerics worship and enact the will of their deity to the world, for better or worse. They channel the power of their faith to cast Spells. Main Ability Score is Wisdom.',
        action: 'Channel Divinity',
        actionIcon: '../assets/actions/Channel_Divinity.png',
        actionDescription: 'The ability to channel divine energy.'
    })
    Cleric.save()

    const Druid = await new Class({
        classIcon: '../assets/classes/Druid.png',
        classDescription: 'Druids are closely attuned with nature and the animals that live in it. They utilize the power of nature to cast Spells and have the ability to transform into various creatures. Main Ability Score is Wisdom.',
        action: 'Wild Shape',
        actionIcon: '../assets/actions/Wild_Shape.png',
        actionDescription: 'This ability allows a druid to magically transform into various creatures in order to fight in combat or explore the environment'
    })
    Druid.save()

    const Fighter = await new Class({
        classIcon: '../assets/classes/Fighter.png',
        classDescription: 'Fighters use their martial expertise to fight enemies and support their allies in combat. Main Ability Scores are Strength or Dexterity.',
        action: 'Second Wind',
        actionIcon: '../assets/actions/Second_Wind.png',
        actionDescription: 'Draw on your stamina to protect yourself. You regain (+1d10 + Fighter Class Level) Hit Points.'
    })
    Fighter.save()

    const Monk = await new Class({
        classIcon: '../assets/classes/Monk.png',
        classDescription: 'Monks are unarmed combatants capable of spending Ki Points to perform special abilities. Main Ability Scores are Dexterity (or Strength), Dexterity and Constituion.',
        action: 'Flurry of Blows',
        actionIcon: '../assets/actions/Flurry_of_Blows.png',
        actionDescription: 'Bonus Action. Punch twice in quick succession.'
    })
    Monk.save()

    const Paladin = await new Class({
        classIcon: '../assets/classes/Paladin.png',
        classDescription: 'Paladins are masters of a variety of weapons and armour. They channel the power of their sacred oath to heal the sick and injured, while smiting their foes. Main Ability Scores are Strength, Charisma and Constituion',
        action: 'Lay on Hands',
        actionIcon: '../assets/actions/Lay_on_Hands.png',
        actionDescription: 'Use your blessed touch to heal a creature or cure it of all diseases and poisons.'
    })
    Paladin.save()

    const Ranger = await new Class({
        classIcon: '../assets/classes/Ranger.png',
        classDescription: 'Rangers are in tune with nature and their surroundings. Rangers utilize both their knowledge of the wilds and spellcasting to pursue their prey. Main Ability Scores are Dexterity, Constitution and Wisdom.',
        action: 'Natural Explorer',
        actionIcon: '../assets/actions/Natural_Explorer.png',
        actionDescription: 'Rangers are adept at traversing and surviving in their natural habitat.'
    })
    Ranger.save()

    const Rogue = await new Class({
        classIcon: '../assets/classes/Rogue.png',
        classDescription: 'Rogues are well versed in the art of stealth and rely on their resourcefulness to be in control of any challenging situation. Main Ability Score is Dexterity.',
        action: 'Sneak Attack',
        actionIcon: '../assets/actions/Sneak_Attack.png',
        actionDescription: 'Deals an extra +1d6 damage to a foe you have Advantage against.'
    })
    Rogue.save()

    const Sorcerer = await new Class({
        classIcon: '../assets/classes/Sorcerer.png',
        classDescription: 'Sorcerers use their innate magical powers to fight enemies and aid allies in combat. Main Ability Score is Charisma.',
        action: 'Metamagic',
        actionIcon: '../assets/actions/Metamagic.png',
        actionDescription: 'Allows a Sorcerer to add additional effects to magic spells in exchange for Sorcery Points.'
    })
    Sorcerer.save()

    const Warlock = await new Class({
        classIcon: '../assets/classes/Warlock.png',
        classDescription: 'Warlocks channel a pact made with their Patron to fight enemies and aid allies. Main Ability Score is Charisma.',
        action: 'Pact Magic',
        actionIcon: '../assets/actions/Feat.png',
        actionDescription: 'A Warlock will know fewer Spells at a time, but Spells are Always Prepared. Their Spell Slots also refresh on Short Rest, instead of Long Rest.'
    })
    Warlock.save()

    const Wizard = await new Class({
        classIcon: '../assets/classes/Wizard.png',
        classDescription: 'Wizards channel magic through their extensive knowledge of the arcane to fight enemies and aid allies. Main Ability Score is Intelligence. ',
        action: 'Arcane Recovery',
        actionIcon: '../assets/actions/Arcane_Recovery.png',
        actionDescription: 'Once per day, you can replenish Spell Slots.'
    })
    Wizard.save()
}

const run = async () => {
    await main()
    // db.close()
}

run()