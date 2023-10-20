document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3001/backgrounds')
        .then(response => response.json())
        .then(data => {
            const backgroundsList = document.getElementById('backgrounds-list')

            data.forEach(background => {
                const backgroundCard = createBackgroundCard(background)
                backgroundsList.appendChild(backgroundCard)
            })
        })
        .catch(error => {
            console.error('Error fetching background data:', error)
        })

    function createBackgroundCard(background) {
        const card = document.createElement('div')
        card.className = 'background-card'

        const backgroundName = document.createElement('h2')
        backgroundName.textContent = background.name

        const proficiency1 = document.createElement('p')
        proficiency1.innerHTML = `<strong>Proficiency 1:</strong> ${background.proficiency1}`

        const proficiency2 = document.createElement('p')
        proficiency2.innerHTML = `<strong>Proficiency 2:</strong> ${background.proficiency2}`

        // Append elements to the card
        card.appendChild(backgroundName)
        card.appendChild(proficiency1)
        card.appendChild(proficiency2)

        return card
    }
})
