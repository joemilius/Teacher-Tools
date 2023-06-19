// Dictionary Collapsable //

let dictionaryHeader = document.querySelector('#dictionary-container h3')
let dictionaryContent = document.querySelector('#dictionary-content')

dictionaryHeader.addEventListener('click', (event) => {
    if (dictionaryContent.className === 'hide'){
        dictionaryContent.className = ''
        dictionaryHeader.textContent = "Dictionary 🔽"
    }else{
        dictionaryContent.className = 'hide'
        dictionaryHeader.textContent = "Dictionary ▶️"
    }
})

// Word Look Up //

let wordInput = document.querySelector('#word-input')
let wordForm = document.querySelector('#word-form')

wordForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let word = wordInput.value 
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(resp => resp.json())
    .then(data => console.log(data))
})