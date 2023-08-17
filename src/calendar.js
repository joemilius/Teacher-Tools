let today = new Date
console.log(today)

let month = today.getMonth() + 1
console.log(month)
let year = today.getFullYear()
console.log(year)
let dateNow = today.getDate()
console.log(dateNow)

let lastDay = new Date(year, month, 0)
console.log(lastDay.getDate())

for (let i = lastDay.getDate(); i > 0 ; i--){
    let calendarRow = document.createElement('tr')
    let sunday = document.createElement('td')
    let monday = document.createElement('td')
    let tuesday = document.createElement('td')
    let wednesday = document.createElement('td')
    let thursday = document.createElement('td')
    let friday = document.createElement('td')
    let saturday = document.createElement('td')
}
