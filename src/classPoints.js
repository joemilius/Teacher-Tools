
// Class Points Collapsable //
let pointsHeader = document.querySelector('#class-points-container h3')
let pointsContent = document.querySelector('#class-points-content')

pointsHeader.addEventListener('click', (event) => {
    if(pointsContent.className === 'hide'){
        pointsContent.className = ''
        pointsHeader.textContent = "Class Points 🔽"
    }else{
        pointsContent.className = 'hide'
        pointsHeader.textContent = 'Class Points ▶️'
    }
})

// Class Points Buttons //

let pointsTotal = 0
let pointsText = document.querySelector('#class-points-content h4')

// Plus Button //

let pointsAdd = document.querySelector('#points-add')

pointsAdd.addEventListener('click', (event) => {
    pointsTotal++
    pointsText.textContent = pointsTotal
})

// Subtract Button //

let pointsSubtract = document.querySelector('#points-subtract')

pointsSubtract.addEventListener('click', (event) => {
    if(pointsTotal > 0){
    pointsTotal--
    pointsText.textContent = pointsTotal
    }
})

//Reset Button //

let pointsReset = document.querySelector('#points-reset')

pointsReset.addEventListener('click', (event) => {
    pointsTotal = 0
    pointsText.textContent = pointsTotal
})
