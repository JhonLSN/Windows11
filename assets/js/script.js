// Zoom Effect Icons NavBar
const icon = document.querySelectorAll('.main__navBar__menu img')

// Navigation Elements
icon.forEach((element) => {
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
  if (main.classList.contains('active')) {
    main.classList.remove('active')
  } else {
    main.classList.add('active')
  }
})

// Show Menu Administrator
const btnAdm = document.querySelector('.main__menu__user-administrator')
const mainMenu = document.querySelector('.main__menu')

btnAdm.addEventListener('click', () => {
  if (mainMenu.classList.contains('active')) {
    mainMenu.classList.remove('active')
  } else {
    mainMenu.classList.add('active')
  }
})








