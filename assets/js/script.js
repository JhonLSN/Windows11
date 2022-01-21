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

  // Close Menu Administrator and Turn Off in Show Menu
  if (mainMenu.classList.contains('activeAdm')) { mainMenu.classList.remove('activeAdm') }
  if (mainMenu.classList.contains('activeOff')) { mainMenu.classList.remove('activeOff') }
})

// Show Menu Administrator
const mainMenu = document.querySelector('.main__menu')
const btnAdm = document.querySelector('.main__menu__user-administrator')

btnAdm.addEventListener('click', () => {
  if (mainMenu.classList.contains('activeAdm')) {
    mainMenu.classList.remove('activeAdm')
  } else {
    mainMenu.classList.add('activeAdm')
  }

  if (mainMenu.classList.contains('activeOff')) { mainMenu.classList.remove('activeOff') }
})

// Show Menu Turn Off
const btnOff = document.querySelector('.button-off')

btnOff.addEventListener('click', () => {
  if (mainMenu.classList.contains('activeOff')) {
    mainMenu.classList.remove('activeOff')
  } else {
    mainMenu.classList.add('activeOff')
  }

  if (mainMenu.classList.contains('activeAdm')) { mainMenu.classList.remove('activeAdm') }
})








