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