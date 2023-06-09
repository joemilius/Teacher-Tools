let weatherHeader = document.querySelector('#weather-container h3')
let weatherContent = document.querySelector('#weather-content')
weatherHeader.addEventListener('click', (event) => {
    if (weatherContent.className === 'hide'){
        weatherContent.className = ''
        weatherHeader.textContent = "Today's Forecast 🔽"
    }else{
        weatherContent.className = 'hide'
        weatherHeader.textContent = "Today's Forecast ▶️"
    }
})

//Fetch for the weather
const weatherForm = document.getElementById('location-form')
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let input = document.getElementById('location')
    let city = input.value
    let longitude = ''
    let latitude = ''

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
    .then(resp => resp.json())
    .then(data => {
        latitude = data.results[0].latitude
        longitude = data.results[0].longitude
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&temperature_unit=fahrenheit&hourly=weathercode`)
        .then(resp => resp.json())
        .then(data => renderWeather(data))
    })
})

function renderWeather(data){
    let currentHour = parseInt(Date().split(' ')[4])
    let tempArray = data.hourly.temperature_2m.slice(currentHour, currentHour + 24)
    let hourArray = data.hourly.time.slice(currentHour, currentHour + 24)
    let weatherCodeArray = data.hourly.weathercode.slice(currentHour, currentHour + 24)

    let forecastScroll = document.getElementById('weather-scroll')
    forecastScroll.innerHTML = ''
    
    for(let i = 0; i < tempArray.length; i++){
        let forecastHour = parseInt(hourArray[i].split('T')[1])

        let weatherDiv = document.createElement('div')
        let weatherImg = document.createElement('img')
        let tempH3 = document.createElement('h3')
        let hourH3 = document.createElement('h3')


        // weatherImg.src = `http:${hourObject.condition.icon}`
        tempH3.textContent = `${Math.trunc(tempArray[i])}°F`
        tempH3.className = 'temp'
        weatherDiv.className = 'eachDay'

        if (forecastHour > 12){
            hourH3.textContent = `${forecastHour - 12}pm`
        } else if (forecastHour === 12){
            hourH3.textContent = '12pm'
        }else if(forecastHour < 12 && forecastHour > 0){
            hourH3.textContent = `${forecastHour}am`
        }else {
            hourH3.textContent = '12am'
        }

        if (weatherCodeArray[i] === 0){
            //clear
            weatherImg.src = './day/113.png'
        }else if (weatherCodeArray[i] > 0 && weatherCodeArray[i] < 4){
            //partly cloudy
            weatherImg.src = './day/116.png'
        }else if ((weatherCodeArray[i] > 50 && weatherCodeArray[i] < 70) || (weatherCodeArray[i] >= 80 && weatherCodeArray[i] <= 82)){
            //rain
            weatherImg.src = './day/263.png'
        }else if ((weatherCodeArray[i] > 70 && weatherCodeArray[i] < 80) || (weatherCodeArray[i] >= 85 && weatherCodeArray[i] <= 86)){
            //snow
            weatherImg.src = './day/338.png'
        }else if (weatherCodeArray[i] > 90){
            //thunderstorms
            weatherImg.src = './day/389.png'
        }else {
            //cloudy
            weatherImg.src = './day/119.png'
        }

        weatherDiv.append(hourH3)
        weatherDiv.append(weatherImg)
        weatherDiv.append(tempH3)
        forecastScroll.append(weatherDiv)
    }
}