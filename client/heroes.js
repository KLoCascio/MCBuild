document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3001/heroes')
        .then(response => response.json())
        .then(data => {
            const heroesList = document.getElementById('heroes-list');
            
            data.forEach(hero => {
                const heroCard = createheroCard(hero)
                herosList.appendChild(heroCard)
            })
        })
        .catch(error => {
            console.error('Error fetching hero data:', error)
        })

    function createHeroCard(hero) {
        const card = document.createElement('div')
        card.className = 'hero-card'

        const heroName = document.createElement('h2')
        heroName.textContent = hero.name

        const heroClass = document.createElement('p')
        heroClass.innerHTML = `<strong>hero Class:</strong> ${hero.heroClass}`

        const damageType = document.createElement('p')
        damageType.innerHTML = `<strong>Damage Type:</strong> ${hero.damageType}`

        const dps = document.createElement('p')
        dps.innerHTML = `<strong>DPS:</strong> ${hero.dps}`

        const description = document.createElement('p')
        description.innerHTML = `<strong>Description:</strong> ${hero.description}`

        card.appendChild(heroName)
        card.appendChild(heroClass)
        card.appendChild(damageType)
        card.appendChild(dps)
        card.appendChild(description)

        return card
    }
})
