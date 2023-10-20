document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3001/heroes')
        .then(response => response.json())
        .then(data => {
            const heroesList = document.getElementById('heroes-list')
            
            data.forEach(hero => {
                const heroCard = createHeroCard(hero)
                heroesList.appendChild(heroCard)
            })
        })
        .catch(error => {
            console.error('Error fetching hero data:', error)
        })

    function createHeroCard(hero) {
        const card = document.createElement('div')
        card.className = 'hero-card'

        const heroName = document.createElement('h2')
        heroName.textContent = hero.chosenName 

        const heroClass = document.createElement('p')
        heroClass.innerHTML = `<strong>Hero Class:</strong> ${hero.chosenClass}` 

        const cantrip = document.createElement('p')
        cantrip.innerHTML = `<strong>Cantrip:</strong> ${hero.chosenCantrip}` 

        const spells = document.createElement('p')
        spells.innerHTML = `<strong>Spells:</strong> ${hero.chosenSpells}`

        const background = document.createElement('p')
        background.innerHTML = `<strong>Background:</strong> ${hero.chosenBackground}`

        card.appendChild(heroName)
        card.appendChild(heroClass)
        card.appendChild(cantrip)
        card.appendChild(spells)
        card.appendChild(background)

        return card
    }
})
