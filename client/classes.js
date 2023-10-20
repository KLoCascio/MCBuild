document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3001/classes')
        .then(response => response.json())
        .then(data => {
            const classesList = document.getElementById('classes-list')

            data.forEach(classData => {
                const classCard = createClassCard(classData)
                classesList.appendChild(classCard)
            })
        })
        .catch(error => {
            console.error('Error fetching class data:', error)
        })

    function createClassCard(classData) {
        const card = document.createElement('div')
        card.className = 'class-card'

        const className = document.createElement('h2')
        className.textContent = classData.name

        const classIcon = document.createElement('img')
        classIcon.src = classData.classIcon
        classIcon.alt = classData.name

        const classDescription = document.createElement('p')
        classDescription.textContent = classData.classDescription

        const action = document.createElement('p')
        action.innerHTML = `<strong>Action:</strong> ${classData.action}`

        const actionIcon = document.createElement('img')
        actionIcon.src = classData.actionIcon
        actionIcon.alt = `${classData.name} ${classData.action}`

        const actionDescription = document.createElement('p')
        actionDescription.textContent = classData.actionDescription

        card.appendChild(classIcon)
        card.appendChild(className)
        card.appendChild(classDescription)
        card.appendChild(actionIcon)
        card.appendChild(action)
        card.appendChild(actionDescription)

        return card
    }
})
