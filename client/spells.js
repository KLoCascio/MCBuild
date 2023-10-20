document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3001/spells')
        .then(response => response.json())
        .then(data => {
            const spellsList = document.getElementById('spells-list');
            
            data.forEach(spell => {
                const spellCard = createSpellCard(spell)
                spellsList.appendChild(spellCard)
            })
        })
        .catch(error => {
            console.error('Error fetching spell data:', error)
        })

    function createSpellCard(spell) {
        const card = document.createElement('div')
        card.className = 'spell-card'

        const spellImage = document.createElement('img')
        spellImage.src = spell.image
        spellImage.alt = spell.name

        const spellName = document.createElement('h2')
        spellName.textContent = spell.name

        const spellClass = document.createElement('p')
        spellClass.innerHTML = `<strong>Spell Class:</strong> ${spell.spellClass}`

        const damageType = document.createElement('p')
        damageType.innerHTML = `<strong>Damage Type:</strong> ${spell.damageType}`

        const dps = document.createElement('p')
        dps.innerHTML = `<strong>DPS:</strong> ${spell.dps}`

        const description = document.createElement('p')
        description.innerHTML = `<strong>Description:</strong> ${spell.description}`

        card.appendChild(spellImage)
        card.appendChild(spellName)
        card.appendChild(spellClass)
        card.appendChild(damageType)
        card.appendChild(dps)
        card.appendChild(description)

        return card
    }
})
