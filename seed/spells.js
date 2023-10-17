const db = require('../db/index')

const { Spell } = require('../models/spells.js')

db.on('error', console.error.bind(console, 'MongoDB Spells connection error:'))

const main = async () => {
    const SpellAnimalFriendship = await new Spell({
        name: 'Animal Friendship',
        spellClass: 'Enchantment',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Convince a beast not to attack you. The creature must have an Intelligence of 3 or less. Condition ends early if you or an ally hurts the target. In higher difficulty modes, the target might become hostile when the spell ends.',
        image: '../assets/spells/Animal_Friendship.png'
    })
    SpellAnimalFriendship.save()

    const SpellArmourofAgathys = await new Spell({
        name: 'Armour of Agathys',
        spellClass: 'Abjuration',
        damageType: 'Self',
        dps: 'Until Long Rest',
        description: 'Gain 5 Temporary Hit Points and deal 5 Cold damage to any creature that hits you with a melee attack. Can only have Temporary Hit Points from one source.',
        image: '../assets/spells/Armour_of_Agathys.png'
    })
    SpellArmourofAgathys.save()

    const SpellArmsofHadar = await new Spell({
        name: 'Arms of Hadar',
        spellClass: 'Conjuration',
        damageType: 'Necrotic',
        dps: '2d6',
        description: 'Prevent targets from using reactions. On Save: Targets still take half damage but are able to use Reactions.',
        image: '../assets/spells/Arms_of_Hadar.png'
    })
    SpellArmsofHadar.save()

    const SpellBane = await new Spell({
        name: 'Bane',
        spellClass: 'Enchantment',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Upto 3 creatures receive a -1d4 penalty to Attack Rolls and Savings Throws.',
        image: '../assets/spells/Bane.png'
    })
    SpellBane.save()

    const SpellBless = await new Spell({
        name: 'Bless',
        spellClass: 'Enchantment',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Bless up to 3 creatures. They gain a +1d4 bonus to Attack Rolls and Saving Throws.',
        image: '../assets/spells/Bless.png'
    })
    SpellBless.save()

    const SpellBurningHands = await new Spell({
        name: 'Burning Hands',
        spellClass: 'Evocation',
        damageType: 'Fire',
        dps: '3d6',
        description: 'Each flammable target is hit with 3d6 Fire damage.',
        image: '../assets/spells/Burning_Hands.png'
    })
    SpellBurningHands.save()

    const SpellCharmPerson = await new Spell({
        name: 'Charm Person',
        spellClass: 'Enchantment',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Charm a humanoid to prevent it from attacking you. You gain Advantage on Charisma Checks in dialogue. Enemies have Advantage on Saving Throws against being Charmed. Condition ends early if you or an ally hurts the target. In higher difficulty modes, the target might accuse you of enchanting them.',
        image: '../assets/spells/Charm_Person.png'
    })
    SpellCharmPerson.save()

    const SpellChromaticOrb = await new Spell({
        name: 'Chromatic Orb',
        spellClass: 'Evocation',
        damageType: 'Choose One: Thunder, Acid, Cold, Fire, Lightning, or Poison',
        dps: '3d8 or 2d8',
        description: 'Hurl a sphere of energy. It deals 3d8 Thunder damage, or 2d8 Acid, Cold, Fire, Lightning or Poison damage and creates a surface.',
        image: '../assets/spells/Chromatic_Orb.png'
    })
    SpellChromaticOrb.save()

    const SpellColourSpray = await new Spell({
        name: 'Color Spray',
        spellClass: 'Illusion',
        damageType: 'Target',
        dps: '1 Turn',
        description: 'Blind creatures up to a combined 33 Hit Points.',
        image: '../assets/spells/Colour_Spray.png'
    })
    SpellColourSpray.save()

    const SpellCommand = await new Spell({
        name: 'Command',
        spellClass: 'Enchantment',
        damageType: 'Target',
        dps: '1 Turn',
        description: 'Command a creature to flee, move closer, freeze, drop to the ground or drop its weapon. The target must succeed on a Wisdom Saving Throw in order to resist the effects.',
        image: '../assets/spells/Command.png'
    })
    SpellCommand.save()

    const SpellCompelledDuel = await new Spell({
        name: 'Compelled Duel',
        spellClass: 'Enchantment',
        damageType: 'Target',
        dps: '3 Turns',
        description: 'Bonus Action. Force an enemy to attack only you, giving it Disadvantage against other targets.',
        image: '../assets/spells/Compelled_Duel.png'
    })
    SpellCompelledDuel.save()

    const SpellCreateorDestroyWater = await new Spell({
        name: 'Create or Destroy Water',
        spellClass: 'Transmutation',
        damageType: 'Target',
        dps: 'Until Short Rest',
        description: 'Choose to call forth rain or destroy a water-based surface.',
        image: '../assets/spells/Create_or_Destroy_Water.png'
    })
    SpellCreateorDestroyWater.save()

    const SpellCureWounds = await new Spell({
        name: 'Cure Wounds',
        spellClass: 'Evocation',
        damageType: 'Healing',
        dps: '1d8 + Spellcasting Modifier',
        description: 'Heal a creature you can touch.',
        image: '../assets/spells/Cure_Wounds.png'
    })
    SpellCureWounds.save()

    const SpellDisguiseSelf = await new Spell({
        name: 'Disguise Self',
        spellClass: 'Illusion',
        damageType: 'Self',
        dps: 'Until Long Rest',
        description: 'Magically change all aspects of your apperance.',
        image: '../assets/spells/Disguise_Self.png'
    })
    SpellDisguiseSelf.save()

    const SpellDissonantWhispers = await new Spell({
        name: 'Dissonant Whispers',
        spellClass: 'Enchantment',
        damageType: 'Psychic',
        dps: '3d6',
        description: 'Frighten a creature: it will be easier to hit and acnnot move. On a succesful Wisdom Saving Throw, the creature only takes half damage.',
        image: '../assets/spells/Dissonant_Whispers.png'
    })
    SpellDissonantWhispers.save()

    const SpellDivineFavour = await new Spell({
        name: 'Divine Favour',
        spellClass: 'Evocation',
        damageType: 'Radiant',
        dps: '1d4',
        description: 'Bonus Action. Your prayer empowers you with divine radiance. Your weapons deal an additional 1d4 Radiant damage for 3 turns.',
        image: '../assets/spells/Divine_Favour.png'
    })
    SpellDivineFavour.save()

    const SpellEnhanceLeap = await new Spell({
        name: 'Enhance Leap',
        spellClass: 'Transmutation',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Triple a creature\'s jumping distance.',
        image: '../assets/spells/Enhance_Leap.png'
    })
    SpellEnhanceLeap.save()

    const SpellEnsnaringStrike = await new Spell({
        name: 'Ensnaring Strike',
        spellClass: 'Conjuration',
        damageType: 'Piercing',
        dps: '1d6',
        description: 'Your attack summons thorny vines, dealing Weapon Damage and possibly Ensnaring your target. Ensnared creatures cannot move and take 1d6 Piercing damage at the start of each turn. An ally can use their Help Action to try and tear away the vines. (There is a Melee and Ranged option).',
        image: '../assets/spells/Ensnaring_Strike.png'
    })
    SpellEnsnaringStrike.save()

    const SpellEntangle = await new Spell({
        name: 'Entangle',
        spellClass: 'Conjuration',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Vines sprout from the ground, turning it into Difficult Terrain and possibly Entangling creatures within. Entangled creatures cannot move. An ally can use its help action to try and tear away the vines.',
        image: '../assets/spells/Entangle.png'
    })
    SpellEntangle.save()

    const SpellExpeditiousRetreat = await new Spell({
        name: 'Expeditious Retreat',
        spellClass: 'Transmutation',
        damageType: 'Self',
        dps: 'Until Long Rest',
        description: 'Gain Dash immediately and as a Bonus Action on each of your turns until this spell ends.',
        image: '../assets/spells/Expeditious_Retreat.png'
    })
    SpellExpeditiousRetreat.save()

    const SpellFaerieFire = await new Spell({
        name: 'Faerie Fire',
        spellClass: 'Evocation',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'All targets within the light turn visible, and Attack Rolls against them have Advantage.',
        image: '../assets/spells/Faerie_Fire.png'
    })
    SpellFaerieFire.save()

    const SpellFalseLife = await new Spell({
        name: 'False Life',
        spellClass: 'Necromancy',
        damageType: 'Self',
        dps: 'Until Long Rest',
        description: 'Bolster yourself with a necromantic facsimile of life to gain 7 Temporary Hit Points.',
        image: '../assets/spells/False_Life.png'
    })
    SpellFalseLife.save()

    const SpellFeatherFall = await new Spell({
        name: 'Feather Fall',
        spellClass: 'Transmutation',
        damageType: 'PBAOE',
        dps: '10 Turns',
        description: 'You and nearby allies gain Immunity to Falling Damage.',
        image: '../assets/spells/Feather_Fall.png'
    })
    SpellFeatherFall.save()

    const SpellFindFamiliar = await new Spell({
        name: 'Find Familiar',
        spellClass: 'Conjuration',
        damageType: 'Self',
        dps: 'Until Long Rest',
        description: 'Summon a familiar, a fey spirit that takes an animal form of your choosing.',
        image: '../assets/spells/Find_Familiar.png'
    })
    SpellFindFamiliar.save()

    const SpellFogCloud = await new Spell({
        name: 'Fog Cloud',
        spellClass: 'Conjuration',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Create a cloud of dense fog to Heavily Obscure and Blind creatures within.',
        image: '../assets/spells/Fog_Cloud.png'
    })
    SpellFogCloud.save()

    const SpellGoodberry = await new Spell({
        name: 'Goodberry',
        spellClass: 'Transmutation',
        damageType: 'Target',
        dps: 'Until Long Rest',
        description: 'Conjure four magical berries for yourself or a companion. Creatures who eat a berry regain 1d4 Hit Points. Each berry counts as one Camp Supplies. The berries appear in the targeted creature\'s inventory and disappear after a Long Rest.'
        image: '../assets/spells/Goodberry.png'
    })
    SpellGoodberry.save()

    const SpellGrease = await new Spell({
        name: 'Grease',
        spellClass: 'Conjuration',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Cover the ground in flammable grease. It becomes Difficult Terrain and creatures within can fall Prone.',
        image: '../assets/spells/Grease.png'
    })
    SpellGrease.save()

    const SpellGuidingBolt = await new Spell({
        name: 'Guiding Bolt',
        spellClass: 'Evocation',
        damageType: 'Radiant',
        dps: '4d6',
        description: 'The next attack Roll against this target has Advantage.',
        image: '../assets/spells/Guiding_Bolt.png'
    })
    SpellGuidingBolt.save()

    const SpellHailofThorns = await new Spell({
        name: 'Hail of Thorns',
        spellClass: 'Conjuration',
        damageType: 'Piercing',
        dps: '1d10',
        description: 'The thorns deal Weapon Damage to the target and then explode. The explosion deals an additional 1d10 Piercing Damage to the target and surrounding creatures.',
        image: '../assets/spells/Hail_of_Thorns.png'
    })
    SpellHailofThorns.save()

    const SpellHealingWord = await new Spell({
        name: 'Healing Word',
        spellClass: 'Evocation',
        damageType: 'Target',
        dps: '1d4 + Spellcasting Modifier',
        description: 'Heal a creature you can see.',
        image: '../assets/spells/Healing_Word.png'
    })
    SpellHealingWord.save()

    const SpellHellishRebuke = await new Spell({
        name: 'Hellish Rebuke',
        spellClass: 'Evocation',
        damageType: 'Fire',
        dps: '2d10',
        description: 'React to your next attacker with flames that deal 2d10 Fire Damage.',
        image: '../assets/spells/Hellish_Rebuke.png'
    })
    SpellHellishRebuke.save()

    const SpellHeroism = await new Spell({
        name: 'Heroism',
        spellClass: 'Enchantment',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Make yourself or a target immune to Frightened and gain 5 Temporary Hit Points each turn.',
        image: '../assets/spells/Heroism.png'
    })
    SpellHeroism.save()

    const SpellHex = await new Spell({
        name: 'Hex',
        spellClass: 'Enchantment',
        damageType: 'Necrotic',
        dps: '1d6',
        description: 'Make your attacks deal an additional 1d6 Necrotic Damage to the target and give it Disadvantage on an Ability of your choosing. If the target dies before the spell ends, you can Hex a new creature without expending a spell slot. CONCENTRATION', 
        image: '../assets/spells/Hex.png'
    })
    SpellHex.save()

    const SpellHuntersMark = await new Spell({
        name: 'Hunter\'s Mark',
        spellClass: 'Divination',
        damageType: 'Target',
        dps: 'Until Long Rest',
        description: 'Mark a creature as your quarry to deal an additional 1d6 Physical Damage whenever you hit it with a weapon attack. If the target dies before the spell ends, you can use Reapply Hunter\'s Mark to mark a new creature.',
        image: '../assets/spells/Hunters_Mark.png'
    })
    SpellHuntersMark.save()

    const SpellIceKnife = await new Spell({
        name: 'Ice Knife',
        spellClass: 'Conjuration',
        damageType: 'Piercing + Cold',
        dps: '1d10 + 2d6',
        description: 'Throw a shard of ice that deals 1d10 Piercing Damage. It explodes and deals 2d6 Cold Damage to anyone nearby. It leaves an Ice Surface. On miss, the shard of ice still explodes. This spell can be cast while you are silenced.',
        image: '../assets/spells/Ice_Knife.png'
    })
    SpellIceKnife.save()

    const SpellInflictWounds = await new Spell({
        name: 'Inflict Wounds',
        spellClass: 'Necromancy',
        damageType: 'Necrotic',
        dps: '3d10',
        description: 'Putrefy a creature with Necrotic energy filling your hands.',
        image: '../assets/spells/Inflict_Wounds.png'
    })
    SpellInflictWounds.save()

    const SpellLongstrider = await new Spell({
        name: 'Longstrider',
        spellClass: 'Transmutation',
        damageType: 'Target',
        dps: 'Until Long Rest',
        description: 'Increase a creature\'s Movement Speed by 3m/10ft.',
        image: '../assets/spells/Longstrider.png'
    })
    SpellLongstrider.save()

    const SpellMageArmour = await new Spell({
        name: 'Mage Armour',
        spellClass: 'Abjuration',
        damageType: 'Target',
        dps: 'Until Long Rest',
        description: 'Protect a target from attacks: increase its Armour Class to 13 + its Dexterity modifier.',
        image: '../assets/spells/Mage_Armour.png'
    })
    SpellMageArmour.save()

    const SpellMagicMissile = await new Spell({
        name: 'Magic Missile',
        spellClass: 'Evocation',
        damageType: 'Force',
        dps: '1d4 + 1',
        description: 'Shoot 3 magical darts, each dealing 1d4+1 Force Damage. They always hit their target.',
        image: '../assets/spells/Magic_Missile.png'
    })
    SpellMagicMissile.save()

    const SpellProtectionfromEvilandGood = await new Spell({
        name: 'Protection from Evil and Good',
        spellClass: 'Abjuration',
        damageType: 'Target',
        dps: 'Until Long Rest',
        description: 'Protect an ally against the attacks and powers of aberrations, celestials, elementals, fey, fiends, and undead.',
        image: '../assets/spells/Protection_EvilGood.png'
    })
    SpellProtectionfromEvilandGood.save()

    const SpellRayofSickness = await new Spell({
        name: 'Ray of Sickness',
        spellClass: 'Necromancy',
        damageType: 'Poison',
        dps: '2d8',
        description: 'Possibly Poisons the target.',
        image: '../assets/spells/Ray_of_Sickness.png'
    })
    SpellRayofSickness.save()

    const SpellSanctuary = await new Spell({
        name: 'Sanctuary',
        spellClass: 'Abjuration',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'You or an ally cannot be targeted until you attack or harm a creature. You can still take damage from area spells.',
        image: '../assets/spells/Sanctuary.png'
    })
    SpellSanctuary.save()

    const SpellSearingSmite = await new Spell({
        name: 'Searing Smite',
        spellClass: 'Evocation',
        damageType: 'Fire',
        dps: '1d6',
        description: 'Deal an extra 2-12 Fire Damage and set yoru target on fire: it takes 1-6 fire damage every turn.',
        image: '../assets/spells/Searing_Smite.png'
    })
    SpellSearingSmite.save()

    const SpellShield = await new Spell({
        name: 'Shield',
        spellClass: 'Abjuration',
        damageType: 'Self',
        dps: '1 Turn',
        description: 'When you are about to be hit by an enemy, increase your Armour Class by 5. You take no damage from Magic Missile.',
        image: '../assets/spells/Shield.png'
    })
    SpellShield.save()

    const SpellShieldofFaith = await new Spell({
        name: 'Shield of Faith',
        spellClass: 'Abjuration',
        damageType: 'Target',
        dps: 'Until Long Rest',
        description: 'Protect a creature from attacks: increase its Armour Class by 2.',
        image: '../assets/spells/Shield_of_Faith.png'
    })
    SpellShieldofFaith.save()

    const SpellSleep = await new Spell({
        name: 'Sleep',
        spellClass: 'Enchantment',
        damageType: 'Target',
        dps: '2 Turns',
        description: 'Put creatures into a magical slumber. Select targets up to a combined 24 Hit Points.',
        image: '../assets/spells/Sleep.png'
    })
    SpellSleep.save()

    const SpellSpeakWithAnimals = await new Spell({
        name: 'Speak with Animals',
        spellClass: 'Divination',
        damageType: 'Self',
        dps: 'Until Long Rest',
        description: 'Gain the ability to comprehend and communicate with beasts.',
        image: '../assets/spells/Speak_with_Animals.png'
    })
    SpellSpeakWithAnimals.save()

    const SpellTashasHideousLaughter = await new Spell({
        name: 'Tasha\'s Hideous Laughter',
        spellClass: 'Enchantment',
        damageType: 'Target',
        dps: '10 Turns',
        description: 'Leave a creature Prone with laughter, without the ability to get up.',
        image: '../assets/spells/Tashas_Hideous_Laughter.png'
    })
    SpellTashasHideousLaughter.save()

    const SpellThunderousSmite = await new Spell({
        name: 'Thunderous Smite',
        spellClass: 'Evocation',
        damageType: 'Thunder',
        dps: '2d6',
        description: 'Pushes your target 10ft away and possibly knocks it Prone.',
        image: '../assets/spells/Thunderous_Smite.png'
    })
    SpellThunderousSmite.save()

    const Thunderwave = await new Spell({
        name: 'Thunderwave',
        spellClass: 'Evocation',
        damageType: 'Thunder',
        dps: '2d8',
        description: 'Release a wave of thunderous force that pushes away all creatures and objects.',
        image: '../assets/spells/Thunderwave.png'
    })
    Thunderwave.save()

    const SpellWitchBolt = await new Spell({
        name: 'Witch Bolt',
        spellClass: 'Evocation',
        damageType: 'Lightning',
        dps: '1d12',
        description: 'Link yourself to a target with a bolt of lightning. Deal an additional 1d12 Lightning Damage each turn by activating it.',
        image: '../assets/spells/Witch_Bolt.png'
    })
    SpellWitchBolt.save()

    const SpellWrathfulSmite = await new Spell({
        name: 'Wrathful Smite',
        spellClass: 'Evocation',
        damageType: 'Psychic',
        dps: '1d6',
        description: 'Possibly Frightens your target. They\'ll have Disadvantage on Ability Checks and Attack Rolls and they cannot move.',
        image: '../assets/spells/Wrathful_Smite.png'
    })
    SpellWrathfulSmite.save()
    
}

const run = async () => {
    await main()
    db.close()
}

run()

