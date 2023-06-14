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