// Zoom Effect Icons NavBar
const icon = document.querySelectorAll('.main__navBar__menu img')

icon.forEach((element) =>{
  element.addEventListener('mousedown', () => {
    element.style.transform = 'scale(0.8)'
  })

  element.addEventListener('mouseup', () => {
    element.style.transform = 'scale(1)'
  })
})

// Show Menu 
const btnMenu = document.querySelector('.start-btn')
const main = document.querySelector('.main')

btnMenu.addEventListener('click', () => {
  main.classList.toggle('active')
})

