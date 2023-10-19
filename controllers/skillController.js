const Skill = require('../models/skills.js')

async function getSkills(req, res) {
    try {
        const skills = await Skill.find()
        res.status(200).send(skills)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getSkillById(req, res) {
    try {
        const skill = await Skill.findById(req.params.id)
        res.status(200).send(skill)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function createSkill(req, res) {
    try {
        const skill = await Skill(req.body)
        await skill.save()
        return res.status(201).json({ skill })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function updateSkill(req, res) {
    try {
        const id = req.params.id
        const skill = await Skill.findByIdAndUpdate(id, req.body, { new: true })
        if (skill) {
            return res.status(201).json(skill)
        }
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteSkill(req, res) {
    try {
        const id = req.params.id
        const skill = await Skill.findByIdAndDelete(id, req.body, { new: true })
        if (skill) {
            return res.status(201).json(skill)
        }

    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = {
    getSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill
}
