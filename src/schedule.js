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
    let scheduleDisplay = document.querySelector('#schedule-display')
    let timeInput = document.querySelector("#time-input")
    let eventInput = document.querySelector("#event-input")
    let eventContainer = document.createElement('div')
    let time = document.createElement('h3')
    let eventH3 = document.createElement('h3')

    eventContainer.className = 'event-container'
    time.textContent = timeInput.value
    eventH3.textContent = eventInput.value
    eventContainer.append(time, eventH3)
    scheduleDisplay.append(eventContainer)
    

})


