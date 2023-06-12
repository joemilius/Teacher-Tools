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
let minuteTotal = 0

minutesPlus.addEventListener('click', (event)=> {
    minutesAdd()
})

function minutesAdd(){
    minuteTotal++
    if (minuteTotal < 10 && minuteTotal >= 0){
        minutesText.textContent = `0${minuteTotal}`
    } else if (minuteTotal >= 10 && minuteTotal <= 99){
        minutesText.textContent = minuteTotal
    }else if (minuteTotal > 99){
        minuteTotal--
        minutesText.textContent = 99
    }
}

minutesMinus.addEventListener('click', (event)=> {
    minutesSubtract()
})

function minutesSubtract(){
    minuteTotal--
    if (minuteTotal < 10 && minuteTotal >= 0){
        minutesText.textContent = `0${minuteTotal}`
    } else if (minuteTotal >= 10 && minuteTotal <= 99){
        minutesText.textContent = minuteTotal
    }else if (minuteTotal > 99){
        minuteTotal++
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
