const db = require('../db')

const main = async () => {
    const backgroundData = [
        { name: 'Acolyte', proficiency1: 'Insight', proficiency2: 'Religion' },
        { name: 'Charlatan', proficiency1: 'Deception', proficiency2: 'Sleight of Hand' },
        { name: 'Criminal', proficiency1: 'Deception', proficiency2: 'Stealth' },
        { name: 'Entertainer', proficiency1: 'Acrobatics', proficiency2: 'Performance' },
        { name: 'Folk Hero', proficiency1: 'Animal Handling', proficiency2: 'Survival' },
        { name: 'Guild Artisan', proficiency1: 'Insight', proficiency2: 'Persuasion' },
        { name: 'Noble', proficiency1: 'History', proficiency2: 'Persuasion' },
        { name: 'Outlander', proficiency1: 'Athletics', proficiency2: 'Survival' },
        { name: 'Sage', proficiency1: 'Arcana', proficiency2: 'History' },
        { name: 'Soldier', proficiency1: 'Athletics', proficiency2: 'Intimidation' },
        { name: 'Urchin', proficiency1: 'Sleight of Hand', proficiency2: 'Stealth' },
    ]
}

// I need to link the proficiencies by id here to enable them on the hero.