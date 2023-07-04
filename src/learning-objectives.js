let subjectInput = document.querySelector('#subject-input')
let objectiveInput = document.querySelector('#objective-input')
let objectivesForm = document.querySelector('#learning-objectives-form')
let objectiveContent = document.querySelector('#learning-objectives-content')

objectivesForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let subject = subjectInput.value
    let objective = objectiveInput.value

    let objectiveDiv = document.createElement('div')
    let subjectH6 = document.createElement('h6')
    let objectiveP = document.createElement('p')

    subjectH6.className = 'objective-display'
    objectiveP.className = 'objecive-p'

    subjectH6.textContent = `${subject} ▶️`
    objectiveP.textContent = objective

    objectiveDiv.style.visibility = 'hidden'

    objectiveDiv.append(objectiveP)
    objectiveContent.append(subjectH6, objectiveDiv)

    subjectH6.addEventListener('click', (event) => {

        if (event.target.textContent === `${subject} ▶️`){
            objectiveDiv.style.visibility = 'visible'
            subjectH6.textContent = `${subject} 🔽`
        }else {
            objectiveDiv.style.visibility = 'hidden'
            subjectH6.textContent = `${subject} ▶️`
        }
        
    })

    subjectInput.value = ''
    objectiveInput.value = ''

})

