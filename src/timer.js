let timerContent = document.querySelector("#timer-content")
let timerHeader = document.querySelector('#timer-container h3')
// Timer Collapse //
timerHeader.addEventListener('click', (event) => {
    if(timerContent.className === 'hide'){
        timerContent.className = ''
        timerHeader.textContent = "Timer 🔽"
    }else{
        timerContent.className = 'hide'
        timerHeader.textContent = 'Timer ▶️'
    }
    
})

// Minutes Buttons Events //
let minutesText = document.querySelector('#minutes')
let minutesPlus = document.querySelector('#minutes-plus')
let minutesMinus = document.querySelector('#minutes-minus')
let minutesTotal = 0

minutesPlus.addEventListener('click', (event)=> {
    minutesAdd()
})

function minutesAdd(){
    minutesTotal++
    if (minutesTotal < 10 && minutesTotal >= 0){
        minutesText.textContent = `0${minutesTotal}`
    } else if (minuteTotal >= 10 && minuteTotal <= 99){
        minutesText.textContent = minutesTotal
    }else if (minutesTotal > 99){
        minutesTotal--
        minutesText.textContent = 99
    }
}

minutesMinus.addEventListener('click', (event)=> {
    minutesSubtract()
})

function minutesSubtract(){
    minutesTotal--
    if (minutesTotal < 0){
        minutesTotal++
    }else if (minutesTotal < 10 && minutesTotal >= 0){
        minutesText.textContent = `0${minutesTotal}`
    } else if (minutesTotal >= 10 && minutesTotal <= 99){
        minutesText.textContent = minutesTotal
    }else if (minutesTotal > 99){
        minutesText.textContent = 99
    }
}

// Seconds Buttons Events //
let secondsText = document.querySelector('#seconds')
let secondsPlus = document.querySelector('#seconds-plus')
let secondsMinus = document.querySelector('#seconds-minus')
let secondsTotal = 0

secondsPlus.addEventListener('click', (event) => {
    secondsAdd()
})

function secondsAdd(){
    secondsTotal++
    if (secondsTotal < 10){
        secondsText.textContent = `0${secondsTotal}`
    } else if (secondsTotal >= 10 && secondsTotal <= 59 ){
        secondsText.textContent = secondsTotal
    } else if (secondsTotal > 59){
        secondsText.textContent = '00'
        secondsTotal = 0
        minutesAdd()
    }
}

secondsMinus.addEventListener('click', (event) => {
    secondsSubtract()
})

function secondsSubtract(){
    secondsTotal--
    
    if (secondsTotal < 0 && minutesTotal === 0){
        secondsTotal++
    }else if(secondsTotal < 0 && minutesTotal > 0){
        secondsTotal = 59
        secondsText.textContent = '59'
        minutesSubtract()
    } else if(secondsTotal < 10 && secondsTotal >= 0){
        secondsText.textContent = `0${secondsTotal}`
    } else if (secondsTotal >= 10 && secondsTotal <=59){
        secondsText.textContent = secondsTotal
    }
    
}

// Timer Interval ID //

let intervalId;

function countDown(){
    secondsSubtract()
    console.log(minutesTotal)
    console.log(secondsTotal)
    if(minutesTotal === 0 && secondsTotal === 0){
        console.log('hello')
        clearInterval(intervalId)
        let timerContainer = document.querySelector('#timer-container')
        timerContainer.style.background = 'red'
        setTimeout(() => {
            minutesTotal = 0
            secondsTotal = 0
            timerContainer.style.background = 'whitesmoke'
        }, 3000)

    }
}

// Start Button //
let startButton = document.querySelector('#start-button')

startButton.addEventListener('click', (event) => {
    intervalId = setInterval(() => {
        countDown()
    }, 1000)
})


// Pause Button //
let pauseButton = document.querySelector('#pause-button')

pauseButton.addEventListener('click', (event) => {
    clearInterval(intervalId)
})


// Clear Button //
let timerClearButton = document.querySelector('#clear-button')
console.log(timerClearButton)
