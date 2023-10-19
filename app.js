const express = require('express')
const db = require('./db/index')
const cors = require('cors')

//CONTROLLERS
const abilityController = require('./controllers/abilityController.js')
const backgroundController = require('./controllers/backgroundController.js')
const cantripController = require('./controllers/cantripController.js')
const classController = require('./controllers/classController.js')
// const proficiencyController = require('./controllers/proficiencyController.js')
// const raceController = require('./controllers/raceController.js')
// const skillController = require('./controllers/skillController.js')
const spellController = require('./controllers/spellController.js')
// const subraceController = require('./controllers/subraceContoller.js')

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
app.get('/spells', spellController.getSpells)
app.get('/backgrounds', backgroundController.getBackgrounds)
app.get('/cantrips', cantripController.getCantrips)
app.get('/classes', classController.getClasses)
// app.get('/proficiency', proficiencyController.getProficiencies)
// app.get('/races', raceController.getRaces)
// app.get('/skills', skillController.getSkills)
// app.get('/subraces', subraceController.getSubraces)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))