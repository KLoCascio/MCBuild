document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3001/races') // Adjust the URL accordingly
        .then(response => response.json())
        .then(data => {
            const racesList = document.getElementById('races-list')

            data.forEach(raceData => {
                const raceCard = createRaceCard(raceData)
                racesList.appendChild(raceCard)
            })
        })
        .catch(error => {
            console.error('Error fetching race data:', error)
        })

    function createRaceCard(raceData) {
        const card = document.createElement('div')
        card.className = 'race-card'

        const raceName = document.createElement('h2')
        raceName.textContent = raceData.name

        const racialWeapons = document.createElement('p')
        racialWeapons.innerHTML = `<strong>Racial Weapons:</strong> ${raceData.racialWeapons}`

        const racialArmour = document.createElement('p')
        racialArmour.innerHTML = `<strong>Racial Armour:</strong> ${raceData.racialArmour}`

        const racialPerk = document.createElement('p')
        racialPerk.innerHTML = `<strong>Racial Perk:</strong> ${raceData.racialPerk}`

        const perkDescription = document.createElement('p')
        perkDescription.textContent = raceData.perkDescription

        card.appendChild(raceName)
        card.appendChild(racialWeapons)
        card.appendChild(racialArmour)
        card.appendChild(racialPerk)
        card.appendChild(perkDescription)

        return card
    }
})
