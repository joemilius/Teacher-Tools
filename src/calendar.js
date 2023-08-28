let today = new Date
let dayNow = today.toString().split(' ')[0]

let month = today.getMonth()
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let monthHeader = document.querySelector('#monthHeader')
monthHeader.innerText = monthArray[month]

let year = today.getFullYear()


let dateNow = today.getDate()


let lastDay = new Date(year, month + 1, 0)
let lastWeekDay = lastDay.toString().split(' ')[0]
console.log(lastDay.getDate())
console.log(lastWeekDay)

for (let i = lastDay.getDate(); i > 0 ; i -= 7){

    if (i === 31 || i === 30 || i === 29 || i === 28){
        renderLastWeekOfMonth(i, lastWeekDay)
    }else if(i < 8){
        renderFirstWeekOfMonth(i)
    }else{
        renderWeek(i)
    }
}

function renderLastWeekOfMonth(date, weekday){
    let calendarHeader = document.querySelector('#calendar-table').children[0]
    let calendarRow = document.createElement('tr')
    let sunday = document.createElement('td')
    let monday = document.createElement('td')
    let tuesday = document.createElement('td')
    let wednesday = document.createElement('td')
    let thursday = document.createElement('td')
    let friday = document.createElement('td')
    let saturday = document.createElement('td')

    sunday.className = "calendar-sunday-bottom"
    monday.className = "calendar-day-bottom"
    tuesday.className = "calendar-day-bottom"
    wednesday.className = "calendar-day-bottom"
    thursday.className = "calendar-day-bottom"
    friday.className = "calendar-day-bottom"
    saturday.className = "calendar-saturday-bottom"

    if(weekday === 'Sat'){
        saturday.innerText = date
        friday.innerText = date - 1
        thursday.innerText = date - 2
        wednesday.innerText = date - 3
        tuesday.innerText = date - 4
        monday.innerText = date - 5
        sunday.innerText = date - 6
    }else if (weekday === 'Fri'){
        saturday.innerText = ''
        friday.innerText = date
        thursday.innerText = date - 1
        wednesday.innerText = date - 2
        tuesday.innerText = date - 3
        monday.innerText = date - 4
        sunday.innerText = date - 5
    }else if (weekday === 'Thu'){
        saturday.innerText = ''
        friday.innerText = ''
        thursday.innerText = date
        wednesday.innerText = date - 1
        tuesday.innerText = date - 2
        monday.innerText = date - 3
        sunday.innerText = date - 4
    }else if (weekday === 'Wed'){
        saturday.innerText = ''
        friday.innerText = ''
        thursday.innerText = ''
        wednesday.innerText = date
        tuesday.innerText = date - 1
        monday.innerText = date - 2
        sunday.innerText = date - 3
    }else if (weekday === 'Tues'){
        saturday.innerText = ''
        friday.innerText = ''
        thursday.innerText = ''
        wednesday.innerText = ''
        tuesday.innerText = date
        monday.innerText = date - 1
        sunday.innerText = date - 2
    }else if (weekday === 'Mon'){
        saturday.innerText = ''
        friday.innerText = ''
        thursday.innerText = ''
        wednesday.innerText = ''
        tuesday.innerText = ''
        monday.innerText = date
        sunday.innerText = date - 1
    }else if (weekday === 'Sat'){
        saturday.innerText = ''
        friday.innerText = ''
        thursday.innerText = ''
        wednesday.innerText = ''
        tuesday.innerText = ''
        monday.innerText = ''
        sunday.innerText = date
    }
    
    calendarRow.append(sunday, monday, tuesday, wednesday, thursday, friday, saturday)
    calendarHeader.parentNode.insertBefore(calendarRow, calendarHeader.nextElementSibling)
}

function renderFirstWeekOfMonth(date){
    let calendarHeader = document.querySelector('#calendar-table').children[0]
    let calendarRow = document.createElement('tr')
    let sunday = document.createElement('td')
    let monday = document.createElement('td')
    let tuesday = document.createElement('td')
    let wednesday = document.createElement('td')
    let thursday = document.createElement('td')
    let friday = document.createElement('td')
    let saturday = document.createElement('td')

    sunday.className = "calendar-sunday"
    monday.className = "calendar-day"
    tuesday.className = "calendar-day"
    wednesday.className = "calendar-day"
    thursday.className = "calendar-day"
    friday.className = "calendar-day"
    saturday.className = "calendar-saturday"

    if(date === 7){
        saturday.innerText = date
        friday.innerText = date - 1
        thursday.innerText = date - 2
        wednesday.innerText = date - 3
        tuesday.innerText = date - 4
        monday.innerText = date - 5
        sunday.innerText = date - 6
    }else if (date === 6){
        saturday.innerText = date
        friday.innerText = date - 1
        thursday.innerText = date - 2
        wednesday.innerText = date - 3
        tuesday.innerText = date - 4
        monday.innerText = date - 5
        sunday.innerText = ''
    }else if (date === 5){
        saturday.innerText = date
        friday.innerText = date - 1
        thursday.innerText = date - 2
        wednesday.innerText = date - 3
        tuesday.innerText = date - 4
        monday.innerText = ''
        sunday.innerText = ''
    }else if (date === 4){
        saturday.innerText = date
        friday.innerText = date - 1
        thursday.innerText = date - 2
        wednesday.innerText = date - 3
        tuesday.innerText = ''
        monday.innerText = ''
        sunday.innerText = ''
    }else if (date === 3){
        saturday.innerText = date
        friday.innerText = date - 1
        thursday.innerText = date - 2
        wednesday.innerText = ''
        tuesday.innerText = ''
        monday.innerText = ''
        sunday.innerText = ''
    }else if (date === 2){
        saturday.innerText = date
        friday.innerText = date - 1
        thursday.innerText = ''
        wednesday.innerText = ''
        tuesday.innerText = ''
        monday.innerText = ''
        sunday.innerText = ''
    }else if (date === 1){
        saturday.innerText = date
        friday.innerText = ''
        thursday.innerText = ''
        wednesday.innerText = ''
        tuesday.innerText = ''
        monday.innerText = ''
        sunday.innerText = ''
    }
    
    calendarRow.append(sunday, monday, tuesday, wednesday, thursday, friday, saturday)
    calendarHeader.parentNode.insertBefore(calendarRow, calendarHeader.nextElementSibling)
}

function renderWeek(date){
    let calendarHeader = document.querySelector('#calendar-table').children[0]
    let calendarRow = document.createElement('tr')
    let sunday = document.createElement('td')
    let monday = document.createElement('td')
    let tuesday = document.createElement('td')
    let wednesday = document.createElement('td')
    let thursday = document.createElement('td')
    let friday = document.createElement('td')
    let saturday = document.createElement('td')

    sunday.className = "calendar-sunday"
    monday.className = "calendar-day"
    tuesday.className = "calendar-day"
    wednesday.className = "calendar-day"
    thursday.className = "calendar-day"
    friday.className = "calendar-day"
    saturday.className = "calendar-saturday"

    saturday.innerText = date
    friday.innerText = date - 1
    thursday.innerText = date - 2
    wednesday.innerText = date - 3
    tuesday.innerText = date - 4
    monday.innerText = date - 5
    sunday.innerText = date - 6

    calendarRow.append(sunday, monday, tuesday, wednesday, thursday, friday, saturday)
    calendarHeader.parentNode.insertBefore(calendarRow, calendarHeader.nextElementSibling)
}

let sentenceStems = document.querySelectorAll('.stem-filler')
console.log(sentenceStems)

let weekdays = document.querySelectorAll('.day')
weekdays.forEach(day => {
    day.addEventListener('dragstart', (e) => {
        sentenceStems.forEach(stem => {
            stem.addEventListener('dragover', (e) => {
                e.preventDefault()
            })
            stem.addEventListener('drop', (e) => {
                stem.textContent = day.textContent
                day.textContent = null
            })
        })
    })
})