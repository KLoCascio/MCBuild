const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Class = new Schema(
    {
        classIcon: { type: String, require: true },
        classDescription: { type: String, require: true },
        action: { type: String, require: true },
        actionIcon: { type: String, require: true },
        actionDescriptionscription: { type: String, require: true },
    }
)

module.exports = mongoose.model('classes', Class)