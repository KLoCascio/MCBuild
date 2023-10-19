const db = require('../db/index')

const Cantrip = require('../models/cantrips.js')

db.on('error', console.error.bind(console, 'MongoDB Cantrips connection error:'))

const main = async () => {
    const CantripAcidSplash = await new Cantrip({
        name: 'Acid Splash',
        spellClass: 'Conjuration',
        damageType: 'Acid',
        dps: '1d6',
        description: 'Throw a bubble of acid that damages each creature it hits.',
        image: '../assets/cantrips/Blade_Ward.png'
    })
    CantripAcidSplash.save()

    const CantripBladeWard = await new Cantrip({
        name: 'Blade Ward',
        spellClass: 'Abjuration',
        damageType: 'Self',
        dps: '2 Turns',
        description: 'Take only half the damage from Bludgeoning, Piercing, and Slashing attacks.',
        image: '../assets/cantrips/Acid_Splash.png'
    })
    CantripBladeWard.save()

    const CantripBoneChill = await new Cantrip({
        name: 'Bone Chill',
        spellClass: 'Necromancy',
        damageType: 'Necrotic',
        dps: '1d8',
        description: 'Prevent the target from healing until your next turn. An undead target receives Disadvantage on Attack Rolls',
        image: '../assets/cantrips/Bone_Chill.png'
    })
    CantripBoneChill.save()

    const CantripDancingLights = await new Cantrip({
        name: 'Dancing Lights',
        spellClass: 'Evocation',
        damageType: 'Self',
        dps: '10 Turns',
        description: 'Illuminate a 9m/30ft radius.',
        image: '../assets/cantrips/Dancing_Lights.png'
    })
    CantripDancingLights.save()

    const CantripEldritchBlast = await new Cantrip({
        name: 'Eldritch Blast',
        spellClass: 'Evocation',
        damageType: 'Force',
        dps: '1d10',
        description: 'Conjure a beam of crackling energy.',
        image: '../assets/cantrips/Eldritch_Blast.png'
    })
    CantripEldritchBlast.save()

    const CantripFireBolt = await new Cantrip({
        name: 'Fire Bolt',
        spellClass: 'Evocation',
        damageType: 'Fire',
        dps: '1d10',
        description: 'Hurl a mote of fire.',
        image: '../assets/cantrips/Fire_Bolt.png'
    })
    CantripFireBolt.save()

    const CantripFriends = await new Cantrip({
        name: 'Friends',
        spellClass: 'Enchantment',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Gain Advantage on Charisma Checks against a non-hostile creature. In higher difficulty modes, the target might accuse you of enchanting them.',
        image: '../assets/cantrips/Friends.png'
    })
    CantripFriends.save()

    const CantripGuidance = await new Cantrip({
        name: 'Guidance',
        spellClass: 'Divination',
        damageType: 'Ally',
        dps: '10 Turns',
        description: 'The target gains +1d4 bonus to Ability Checks',
        image: '../assets/cantrips/Guidance.png'
    })
    CantripGuidance.save()

    const CantripLight = await new Cantrip({
        name: 'Light',
        spellClass: 'Evocation',
        damageType: 'Target',
        dps: 'Until Long Rest',
        description: 'Infuse an object with an aura of light. Only affects one target at a time.',
        image: '../assets/cantrips/Light.png'
    })
    CantripLight.save()

    const CantripMageHand = await new Cantrip({
        name: 'Mage Hand',
        spellClass: 'Conjuration',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Create a spectral hand that can manipulate and interact with objects. This cantrip can only be cast once per short rest.',
        image: '../assets/cantrips/Mage_Hand.png'
    })
    CantripMageHand.save()

    const CantripMinorIllusion = await new Cantrip({
        name: 'Minor Illusion',
        spellClass: 'Illusion',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Create an illusion that compels nearby creatures to investigate. You can remain hidden while casting this spell. This spell can be cast while you are Silenced.',
        image: '../assets/cantrips/Minor_Illusion.png'
    })
    CantripMinorIllusion.save()

    const CantripPoisonSpray = await new Cantrip({
        name: 'Poison Spray',
        spellClass: 'Conjuration',
        damageType: 'Poison',
        dps: '1d12',
        description: 'Project a puff of noxious gas, dealing 1d12 Poison to a target.',
        image: '../assets/cantrips/Poison_Spray.png'
    })
    CantripPoisonSpray.save()

    const CantripProduceFlame = await new Cantrip({
        name: 'Produce Flame',
        spellClass: 'Conjuration',
        damageType: 'Self',
        dps: 'Until Long Rest',
        description: 'A flame in your hand sheds a light in a 9m/30ft radius and deals 1d8 Fire damage when thrown. Throwing the flame immediately after you conjure it does not cost an Action. Extinguishing or throwing it on subsequent turns costs an Action. The throw has a range of 9m/30ft.',
        image: '../assets/cantrips/Produce_Flame.png'
    })
    CantripProduceFlame.save()

    const CantripRayofFrost = await new Cantrip({
        name: 'Ray of Frost',
        spellClass: 'Evocation',
        damageType: 'Cold',
        dps: '1d8',
        description: 'Reduces the target\'s Movement Speed by 3m/10ft.',
        image: '../assets/cantrips/Ray_of_Frost.png'
    })
    CantripRayofFrost.save()

    const CantripResistance = await new Cantrip({
        name: 'Resistance',
        spellClass: 'Abjuration',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Make a target more resistant to spell effects and conditions: it receives a +1d4 bonus to Saving Throws.',
        image: '../assets/cantrips/Resistance.png'
    })
    CantripResistance.save()

    const CantripSacredFlame = await new Cantrip({
        name: 'Sacred Flame', 
        spellClass: 'Evocation',
        damageType: 'Radiant',
        dps: '1d8',
        description: 'Engulf a target in a flame-like radiance.',
        image: '../assets/cantrips/Sacred_Flame.png'
    })
    CantripSacredFlame.save()

    const CantripShillelagh = await new Cantrip({
        name: 'Shillelagh',
        spellClass: 'Transmutation',
        damageType: 'Self',
        dps: '10 Turns',
        description: 'Bonus Action, Your staff or club becomes magical: it deals 1d8 + Wisdom Modifier Bludgeoning damage, and uses your Spellcasting Ability for Attack Rolls.',
        image: '../assets/cantrips/Shillelagh.png'
    })
    CantripShillelagh.save()

    const CantripShockingGrasp = await new Cantrip({
        name: 'Shocking Grasp',
        spellClass: 'Evocation',
        damageType: 'Lightning',
        dps: '1d8',
        description: 'The target cannot use Reactions. This spell has advantage on creatures with metal armour.',
        image: '../assets/cantrips/Shocking_Grasp.png'
    })
    CantripShockingGrasp.save()

    const CantripThaumaturgy = await new Cantrip({
        name: 'Thaumaturgy',
        spellClass: 'Transmutation',
        damageType: 'Self',
        dps: '10 Turns',
        description: 'Gain Advantage on Intimidation and Performance Checks.',
        image: '../assets/cantrips/Thaumaturgy.png'
    })
    CantripThaumaturgy.save()

    const CantripThornWhip = await new Cantrip({
        name: 'Thorn Whip',
        spellClass: 'Transmutation',
        damageType: 'Piercing',
        dps: '1d6',
        description: 'Pulls the creature 3m/10ft closer to you. The target cannot be pulled if it is Huge in size.',
        image: '../assets/cantrips/Thorn_Whip.png'
    })
    CantripThornWhip.save()

    const CantripTrueStrike = await new Cantrip({
        name: 'True Strike',
        spellClass: 'Divination',
        damageType: 'Self',
        dps: '2 Turns',
        description: 'Gain Advantage on your next Attack Roll.',
        image: '../assets/cantrips/True_Strike.png'
    })
    CantripTrueStrike.save()

    const CantripViciousMockery = await new Cantrip({
        name: 'Vicious Mockery',
        spellClass: 'Enchantment',
        damageType: 'Psychic',
        dps: '1d4',
        description: 'Insult a creature: it has Disadvantage on its next Attack Roll.',
        image: '../assets/cantrips/Vicious_Mockery.png'
    })
    CantripViciousMockery.save()

    console.log('Cantrips Setup!')

}

const run = async () => {
    await main()
    // db.close()
}

run()
