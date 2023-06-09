let timerContent = document.querySelector("#timer-content")
let timerHeader = document.querySelector('#timer-container h3')

timerHeader.addEventListener('click', (event) => {
    if(timerContent.className === 'hide'){
        timerContent.className = ''
    }else{
        timerContent.className = 'hide'
    }
    
})
