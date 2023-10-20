//DATABASES
let abilityDb = new Array
let backgroundDb = new Array
let cantripDb = new Array
let classDb = new Array
let raceDb = new Array
let skillDb = new Array
let spellDb = new Array
let base = 'http://localhost:3001'

//GLOBALS
const heroName = document.querySelector('#hero-name')
const heroAbility = document.querySelector('#hero-abilities')
const heroBackground = document.querySelector('#hero-background')
const heroCantrip = document.querySelector('#hero-cantrips')
const heroClass = document.querySelector('#hero-class')
const heroRace = document.querySelector('#hero-race')
const heroSkill = document.querySelector('#hero-skills')
const heroSpell = document.querySelector('#hero-spells')

//CREATING THE HERO

window.addEventListener('DOMContentLoaded', async (event) => {
    event.preventDefault()
    console.log("Working")

    const nameInput = document.querySelector('#choose-name')

    nameInput.addEventListener('input', function (event) {
        if (this.value.length > 0) {
            heroName.innerText = `${this.value}`

        }
    })
})

///RACE INPUT
async function findRaces() {
    raceDb = await axios.get(`http://localhost:3001/races`)
    let races = raceDb.data
    const raceListOptions = document.querySelector('#race-select')
    for (let i = 0; i < races.length; i++) {
        let raceName = races[i].name
        let raceId = races[i]._id
        raceListOptions.innerHTML += `<option value="${raceId}">${raceName}</options></n>`
    }
    raceListOptions.addEventListener('change', selectRace)
}

findRaces()

function selectRace(event) {
    const race = event.target.value
    const raceName = event.target.options[event.target.selectedIndex].text
    document.querySelector('#race-option').value = race
    heroRace.innerText = `${raceName}`
}

///CLASS INPUT
async function findClasses() {
    classDb = await axios.get(`http://localhost:3001/classes`)
    let classes = classDb.data
    const classListOptions = document.querySelector('#class-select')
    for (let i = 0; i < classes.length; i++) {
        let className = classes[i].name
        let classId = classes[i]._id
        classListOptions.innerHTML += `<option value="${classId}">${className}</options></n>`
    }
    classListOptions.addEventListener('change', selectClass)
}

findClasses()

function selectClass(event) {
    const hClass = event.target.value
    const className = event.target.options[event.target.selectedIndex].text
    document.querySelector('#class-option').value = hClass
    heroClass.innerText = `${className}`
}

///CANTRIP INPUT

///SPELL INPUT

///BACKGROUND INPUT
async function findBackground() {
    backgroundDb = await axios.get(`http://localhost:3001/backgrounds`)
    let backgrounds = backgroundDb.data
    const backgroundListOptions = document.querySelector('#background-select')
    for (let i = 0; i < backgrounds.length; i++) {
        let backgroundName = backgrounds[i].name
        let backgroundId = backgrounds[i]._id
        backgroundListOptions.innerHTML += `<option value="${backgroundId}">${backgroundName}</options></n>`
    }
    backgroundListOptions.addEventListener('change', selectBackground)
}

findBackground()

function selectBackground(event) {
    const background = event.target.value
    const backgroundName = event.target.options[event.target.selectedIndex].text
    document.querySelector('#background-option').value = background
    heroBackground.innerText = `${backgroundName}`
}

///ABILITIES INPUT

///SKILL INPUT

// SHOWCASE THE HERO

async function submitHero(event) {
    event.preventDefault()

    const data = new FormData(event.target)

    const chosenName = data.get('choose-name')
    const chosenAbility = data.get('choose-ability')
    const chosenBackground = data.get('')
    const chosenCantrip = data.get('')
    const chosenClass = data.get('')
    const chosenRace = data.get('')
    const chosenSkill = data.get('')
    const chosenSpell = data.get('')

    console.log({ name })
}

const form = document.querySelector('#hero-editor')
form.addEventListener('submit', submitHero)
