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