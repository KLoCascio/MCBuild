const mongoose = require('mongoose')

const { Schema } = require('mongoose')



const Hero = new Schema(
    {
        name: { type: String, require: true },
        race: { type: Schema.Types.ObjectId, ref: 'Race'},
        subrace: { type: Schema.Types.ObjectId, ref: 'Subrace' },
        raceFeatures: { type: Schema.Types.ObjectId, ref: 'RFeatures' },
        class: { type: Schema.Types.ObjectId, ref: 'Class' },
        subclass: { type: Schema.Types.ObjectId, ref: 'Subclass' },
        classFeatures: { type: Schema.Types.ObjectId, ref: 'CFeatures'},
        cantrips: { type: Schema.Types.ObjectId, ref: 'Cantrips'},
        spells: { type: Schema.Types.ObjectId, ref: 'Spells'},
        abilities: { type: Schema.Types.ObjectId, ref: 'Abilities'},
        skills: { type: Schema.Types.ObjectId, ref: 'Skills' },
        background: { type: Schema.Types.ObjectId, ref: 'Background' },

    }
)



// use this as the index.js