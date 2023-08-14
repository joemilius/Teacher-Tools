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
    let scheduleTable = document.querySelector('#schedule-table tbody')
    let timeInput = document.querySelector("#time-input")
    let activityInput = document.querySelector("#activity-input")
    let activityContainer = document.createElement('tr')
    let time = document.createElement('td')
    let activityH3 = document.createElement('td')

    time.className = 'schedule-time'
    activityH3.className = 'schedule-activity'

    time.textContent = timeInput.value
    activityH3.textContent = activityInput.value
    activityContainer.append(time, activityH3)
    scheduleTable.append(activityContainer)
    

})


