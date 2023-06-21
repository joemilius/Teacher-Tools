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
let wordDisplay = document.querySelector('#word-display')
let meaningList = document.querySelector('#meaning-list')
let wordHeader = document.querySelector('#word')
let synonymsP = document.querySelector('#word-synonyms')
let antonymsP = document.querySelector('#word-antonyms')

wordForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let word = wordInput.value 
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(resp => resp.json())
    .then(data => renderDictionary(data, word))
})

function renderDictionary(data, word){
    wordHeader.textContent = word
    wordDisplay.className = ''
    meaningList.innerHTML = ''
    // wordInput.value = ''
    console.log(data)
     
    let synonymsArray = []
    let antonymsArray = []
    
    data.forEach( wordObj => {
        wordObj.meanings.forEach( meaning => {
            synonymsArray = [...synonymsArray, ...meaning.synonyms]
            antonymsArray = [...antonymsArray, ...meaning.antonyms]
            let meaningList = document.querySelector('#meaning-list')
            let meaningLi = document.createElement('li')
            meaningLi.textContent = `${meaning.partOfSpeech}; ${meaning.definitions[0].definition}`
            meaningList.append(meaningLi)
        })
    })
    synonymsP.textContent = synonymsArray.join(", ")
    antonymsP.textContent = antonymsArray.join(", ")
}