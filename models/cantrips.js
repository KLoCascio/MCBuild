const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Cantrip = new Schema(
    {
        name: { type: String, require: true },
        spellClass: { type: String, require: true },
        damageType: { type: String, require: true },
        dps: { type: String, require: true },
        description: { type: String, require: true },
        image: { type: String, require: true}
    }
)

module.exports = mongoose.model('cantrips', Cantrip)