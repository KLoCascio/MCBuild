const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Ability = new Schema(
    {
        name: { type: String, require: true },
        value: { type: Number, require: true }
    }
)

module.exports = mongoose.model('abilities', Ability)