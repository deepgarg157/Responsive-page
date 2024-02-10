const humburger = document.querySelector('.humburger')
const menu = document.querySelectorAll('.nav-content h3')
const cross = document.querySelector('.cross')
humburger.addEventListener('click', function(){
    menu.forEach((style) => style.style.display = 'block')
    cross.style.display = 'block'
    humburger.style.display = 'none'
})

cross.addEventListener('click', function(){
    humburger.style.display = 'block'
    menu.forEach((style) => style.style.display = 'none')
    cross.style.display = 'none'
})