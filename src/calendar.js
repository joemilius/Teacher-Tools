let today = new Date
console.log(today)

let month = today.getMonth() + 1
console.log(month)
let year = today.getFullYear()
console.log(year)
let dateNow = today.getDate()
console.log(dateNow)
let nextDay = today.getDate() + 16
console.log(nextDay)

let lastDay = new Date(year, month, 0)
console.log(lastDay)
