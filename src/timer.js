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
        minuteTotal--
        minutesText.textContent = 99
    }
}
