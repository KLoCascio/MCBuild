const Ability = require('../models/abilities.js')

async function getAbilities(req, res) {
    try {
        const abilities = await Ability.find()
        res.status(200).send(abilities)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getAbilityById(req, res) {
    try {
        const ability = await Ability.findById(req.params.id)
        res.status(200).send(ability)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function createAbility(req, res) {
    try {
        const ability = await Ability(req.body)
        await ability.save()
        return res.status(201).json({ ability })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function updateAbility(req, res) {
    try {
        const id = req.params.id
        const ability = await Ability.findByIdAndUpdate(id, req.body, { new: true })
        if (ability) {
            return res.status(201).json(ability)
        }
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteAbility(req, res) {
    try {
        const id = req.params.id
        const ability = await Ability.findByIdAndDelete(id, req.body, { new: true })
        if (ability) {
            return res.status(201).json(ability)
        }

    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = {
    getAbilities,
    getAbilityById,
    createAbility,
    updateAbility,
    deleteAbility
}