const { Schema } = require('mongoose')

const AbilitiesSchema = new Schema(
    {
        name: { type: String, require: true },

    }
)

module.exports = AbilitiesSchema