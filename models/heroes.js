const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Hero = new Schema(
    {
        chosenName: { type: String, ref: 'name' },
        chosenRace: { type: String, ref: 'races'},
        chosenClass: { type: String,ref: 'classes' },
        chosenCantrips: { type: String, ref: 'cantrips'},
        chosenSpells: { type: String, ref: 'spells'},
        chosenBackground: { type: String, ref: 'backgrounds' },
    }
)

module.exports = mongoose.model('heroes', Hero)