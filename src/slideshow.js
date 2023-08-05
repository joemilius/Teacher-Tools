let slideForm = document.querySelector('#slideshow-form')


slideForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let slideInput = document.querySelector('#slideshow-link')
    let display = document.querySelector('#slideshow-display')

    console.log(slideInput.value.slice(0, 7))
     

    if (slideInput.value.slice(0,7) === '<iframe'){
        let error = document.querySelector('#slide-error')
        if (error){
            error.remove()
        }
        display.innerHTML = display.innerHTML + slideInput.value
        slideForm.reset()
    }else {
        let error = document.createElement('h3')
        error.textContent = "Please enter the iframe embed link"
        error.style.color = 'red'
        error.id = "slide-error"
        display.append(error)
        slideForm.reset()
    }

})

//https://docs.google.com/presentation/d/e/2PACX-1vRXBuiEZprVGpzuwUoznQRQrqgT9qbGW5xdysvARgMDI0QO4qeesPH7mM_aABePF9H5Gd8JmAC0sA68/pub?start=false&loop=false&delayms=3000

//https://docs.google.com/presentation/d/e/2PACX-1vRXBuiEZprVGpzuwUoznQRQrqgT9qbGW5xdysvARgMDI0QO4qeesPH7mM_aABePF9H5Gd8JmAC0sA68/embed?start=false&loop=false&delayms=3000

//<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRXBuiEZprVGpzuwUoznQRQrqgT9qbGW5xdysvARgMDI0QO4qeesPH7mM_aABePF9H5Gd8JmAC0sA68/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>