const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Race = new Schema(
    {
        name: { type: String, require: true },
        racialWeapons: { type: String, require: true },
        racialArmour: { type: String, require: true },
        racialPerk: { type: String, require: true },
        perkDescription: { type: String, require: true}
    }
)

module.exports = mongoose.model('races', Race)