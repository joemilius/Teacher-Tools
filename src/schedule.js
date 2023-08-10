let scheduleHeader = document.querySelector('#schedule-container h3')
let scheduleContent = document.querySelector('#schedule-content')

scheduleHeader.addEventListener('click', (event) => {
    if (scheduleContent.className === 'hide'){
        scheduleContent.className = ''
        scheduleHeader.textContent = "Today's Forecast 🔽"
    }else{
        scheduleContent.className = 'hide'
        scheduleHeader.textContent = "Today's Forecast ▶️"
    }
})

let scheduleForm = document.querySelector("#schedule-form")
scheduleForm.addEventListener("submit", event => {
    event.preventDefault()
    let timeInput = document.querySelector("#time-input")
    let eventInput = document.querySelector("#event-input")
    console.log(timeInput.value)
    console.log(eventInput.value)
})