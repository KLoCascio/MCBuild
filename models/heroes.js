const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Hero = new Schema(
    {
        chosenName: { type: Schema.Types.ObjectId, ref: 'name' },
        chosenRace: { type: Schema.Types.ObjectId, ref: 'races'},
        chosenClass: { type: Schema.Types.ObjectId, ref: 'classes' },
        chosenCantrips: { type: Schema.Types.ObjectId, ref: 'cantrips'},
        chosenSpells: { type: Schema.Types.ObjectId, ref: 'spells'},
        chosenBackground: { type: Schema.Types.ObjectId, ref: 'backgrounds' },
    }
)

module.exports = mongoose.model('heroes', Hero)