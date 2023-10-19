const mongoose = require('mongoose')

const { Schema } = require('mongoose')

const Race = new Schema(
    {
        race: { type: String, required: true },
        has_subrace: { type: Boolean, required: true },
        subrace: { type: String, required: false },
        extras: { type: String, required: false },
        cantrips: { type: String, required: false},
        spells: { type: String, required: false },
        background: { type: String, required: true },
        abilities: { type: String, required: true },
        skills: { type: String, required: true},
        proficiencies: { type: String, required: true }
        
    }
)