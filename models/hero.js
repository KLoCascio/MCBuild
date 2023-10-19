const mongoose = require('mongoose')

const { Schema } = require('mongoose')



const Hero = new Schema(
    {
        name: { type: String, require: true },
        race: { type: Schema.Types.ObjectId, ref: 'races'},
        raceFeatures: { type: Schema.Types.ObjectId, ref: 'RFeatures' },
        class: { type: Schema.Types.ObjectId, ref: 'Class' },
        subclass: { type: Schema.Types.ObjectId, ref: 'Subclass' },
        classFeatures: { type: Schema.Types.ObjectId, ref: 'CFeatures'},
        cantrips: { type: Schema.Types.ObjectId, ref: 'cantrips'},
        spells: { type: Schema.Types.ObjectId, ref: 'spells'},
        abilities: { type: Schema.Types.ObjectId, ref: 'abilities'},
        skills: { type: Schema.Types.ObjectId, ref: 'skills' },
        background: { type: Schema.Types.ObjectId, ref: 'Background' },

    }
)



// use this as the index.js