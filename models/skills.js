const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Skill = new Schema(
    {
        skills: { type: Array, require: true },
    }
)

module.exports = mongoose.model('skills', Skill)