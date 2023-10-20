document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3001/cantrips')
        .then(response => response.json())
        .then(data => {
            const cantripsList = document.getElementById('cantrips-list')

            data.forEach(cantrip => {
                const cantripCard = createCantripCard(cantrip)
                cantripsList.appendChild(cantripCard)
            })
        })
        .catch(error => {
            console.error('Error fetching cantrip data:', error)
        })

    function createCantripCard(cantrip) {
        const card = document.createElement('div')
        card.className = 'cantrip-card'

        const cantripImage = document.createElement('img')
        cantripImage.src = cantrip.image
        cantripImage.alt = cantrip.name

        const cantripName = document.createElement('h2')
        cantripName.textContent = cantrip.name

        const spellClass = document.createElement('p')
        spellClass.innerHTML = `<strong>Spell Class:</strong> ${cantrip.spellClass}`

        const damageType = document.createElement('p')
        damageType.innerHTML = `<strong>Damage Type:</strong> ${cantrip.damageType}`

        const dps = document.createElement('p')
        dps.innerHTML = `<strong>DPS:</strong> ${cantrip.dps}`

        const description = document.createElement('p')
        description.innerHTML = `<strong>Description:</strong> ${cantrip.description}`

        card.appendChild(cantripImage)
        card.appendChild(cantripName)
        card.appendChild(spellClass)
        card.appendChild(damageType)
        card.appendChild(dps)
        card.appendChild(description)


        return card
    }
})
