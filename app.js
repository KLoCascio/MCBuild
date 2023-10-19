const express = require('express')
const db = require('./db/index')
const cors = require('cors')

//CONTROLLERS
const spellController = require('./controllers/spellController.js')

const PORT = process.env.PORT || 3001
const app = express()

//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded( {extended: true} ))

//LANDING PAGE
app.get('/', (req, res) => {
    res.send({ msg: 'Character Builder Server is Working'})
})

//PAGES
app.get('/spells', spellController.getSpells)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))