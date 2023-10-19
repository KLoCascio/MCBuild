const express = require('express')
const db = require('./db/index')
const cors = require('cors')

//CONTROLLERS
const abilityController = require('./controllers/abilityController.js')
const backgroundController = require('./controllers/backgroundController.js')
const cantripController = require('./controllers/cantripController.js')
const classController = require('./controllers/classController.js')
const raceController = require('./controllers/raceController.js')
const skillController = require('./controllers/skillController.js')
const spellController = require('./controllers/spellController.js')

const PORT = process.env.PORT || 3001
const app = express()

//MIDDLEWAR
app.use(cors())
app.use(express.json())
app.use(express.urlencoded( {extended: true} ))

//LANDING PAGE
app.get('/', (req, res) => {
    res.send({ msg: 'Character Builder Server is Working'})
})

//PAGES
app.get('/abilities', abilityController.getAbilities)
app.get('/abilities/:id', abilityController.getAbilityById)
app.post('/abilities', abilityController.createAbility)
app.put('/abilities/:id', abilityController.updateAbility)
app.delete('abilities/:id', abilityController.deleteAbility)

app.get('/backgrounds', backgroundController.getBackgrounds)
app.get('/backgrounds/:id', backgroundController.getBackgroundById)
app.post('/backgrounds', backgroundController.createBackground)
app.put('/backgrounds/:id', backgroundController.updateBackground)
app.delete('backgrounds/:id', backgroundController.deleteBackground)

app.get('/cantrips', cantripController.getCantrips)
app.get('/cantrips/:id', cantripController.getCantripById)
app.post('/cantrips', cantripController.createCantrip)
app.put('/cantrips/:id', cantripController.updateCantrip)
app.delete('cantrips/:id', cantripController.deleteCantrip)

app.get('/classes', classController.getHeroClasses)
app.get('/classes/:id', classController.getHeroClassById)
app.post('/classes', classController.createHeroClass)
app.put('/classes/:id', classController.updateHeroClass)
app.delete('classes/:id', classController.deleteHeroClass)

app.get('/races', raceController.getRaces)
app.get('/races/:id', raceController.getRaceById)
app.post('/races', raceController.createRace)
app.put('/races/:id', raceController.updateRace)
app.delete('races/:id', raceController.deleteRace)

app.get('/skills', skillController.getSkills)
app.get('/skills/:id', skillController.getSkillById)
app.post('/skills', skillController.createSkill)
app.put('/skills/:id', skillController.updateSkill)
app.delete('skills/:id', skillController.deleteSkill)

app.get('/spells', spellController.getSpells)
app.get('/spells/:id', spellController.getSpellById)
app.post('/spells', spellController.createSpell)
app.put('/spells/:id', spellController.updateSpell)
app.delete('spells/:id', spellController.deleteSpell)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))