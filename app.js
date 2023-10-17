const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( {extended: true} ))

app.get('/', (req, res) => {
    res.send({ msg: 'Character Builder Server is Working'})
})


app.listen(PORT, () => console.log(`Server is running on ${PORT}`))