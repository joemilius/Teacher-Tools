let subjectInput = document.querySelector('#subject-input')
let objectiveInput = document.querySelector('#objective-input')
let objectivesForm = document.querySelector('#learning-objectives-form')

objectivesForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(subjectInput.value)
    console.log(objectiveInput.value)
})

