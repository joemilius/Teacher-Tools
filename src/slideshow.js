let slideForm = document.querySelector('#slideshow-form')


slideForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let slideInput = document.querySelector('#slideshow-link')
    let display = document.querySelector('#slideshow-display')

    display.innerHTML = display.innerHTML + slideInput.value
})