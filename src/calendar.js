let today = new Date
let dayNow = today.toString().split(' ')[0]

let month = today.getMonth() + 1

let year = today.getFullYear()

let dateNow = today.getDate()


let lastDay = new Date(year, month, 0)
let lastWeekDay = lastDay.toString().split(' ')[0]
console.log(lastDay.getDate())
console.log(lastWeekDay)

for (let i = lastDay.getDate(); i > 0 ; i -= 7){

    if (i === 31 || i === 30 || i === 29 || i === 28){
        lastWeekOfMonthRender(i, lastWeekDay)
    }
}

function lastWeekOfMonthRender(date, weekday){
    let calendarHeader = document.querySelector('#calendar-table').children[0]
    let calendarRow = document.createElement('tr')
    let sunday = document.createElement('td')
    let monday = document.createElement('td')
    let tuesday = document.createElement('td')
    let wednesday = document.createElement('td')
    let thursday = document.createElement('td')
    let friday = document.createElement('td')
    let saturday = document.createElement('td')

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