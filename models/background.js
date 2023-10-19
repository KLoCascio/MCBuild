const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Background = new Schema(
    {
        name: { type: String, require: true },
        proficiency1: { type: String, require: true },
        proficiency2: { type: String, require: true }
    }
)

module.exports = mongoose.model('background', Background)