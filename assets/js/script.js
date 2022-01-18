const icon = document.querySelectorAll('.main__navBar__menu img')

icon.forEach((element) =>{
  element.addEventListener('mousedown', () => {
    element.style.transform = 'scale(0.8)'
  })

  element.addEventListener('mouseup', () => {
    element.style.transform = 'scale(1)'
  })
})
