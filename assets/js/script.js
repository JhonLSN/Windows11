const hours = document.querySelector('.hours')
const day = document.querySelector('.date')
const date = new Date()

let getHours = date.getHours()
let getMinutes = date.getMinutes()
let getDay = date.getDate()
let getMonth = date.getMonth()+1

// Formatação do tempo
formatTime()

hours.innerHTML = `${getHours}:${getMinutes}`
day.innerHTML = `${getDay}/${getMonth}/${date.getFullYear()}`

function formatTime() {
  // Minutes
  if (getMinutes == 0) { getMinutes = `0${getMinutes}` }
  if (getMinutes == 1) { getMinutes = `0${getMinutes}` }
  if (getMinutes == 2) { getMinutes = `0${getMinutes}` }
  if (getMinutes == 3) { getMinutes = `0${getMinutes}` }
  if (getMinutes == 4) { getMinutes = `0${getMinutes}` }
  if (getMinutes == 5) { getMinutes = `0${getMinutes}` }
  if (getMinutes == 6) { getMinutes = `0${getMinutes}` }
  if (getMinutes == 7) { getMinutes = `0${getMinutes}` }
  if (getMinutes == 8) { getMinutes = `0${getMinutes}` }
  if (getMinutes == 9) { getMinutes = `0${getMinutes}` }

  // Hours
  if (getHours == 0) { getHours = `0${getHours}` }
  if (getHours == 1) { getHours = `0${getHours}` }
  if (getHours == 2) { getHours = `0${getHours}` }
  if (getHours == 3) { getHours = `0${getHours}` }
  if (getHours == 4) { getHours = `0${getHours}` }
  if (getHours == 5) { getHours = `0${getHours}` }
  if (getHours == 6) { getHours = `0${getHours}` }
  if (getHours == 7) { getHours = `0${getHours}` }
  if (getHours == 8) { getHours = `0${getHours}` }
  if (getHours == 9) { getHours = `0${getHours}` }

  // Days
  if (getDay == 0) { getDay = `0${getDay}` }
  if (getDay == 1) { getDay = `0${getDay}` }
  if (getDay == 2) { getDay = `0${getDay}` }
  if (getDay == 3) { getDay = `0${getDay}` }
  if (getDay == 4) { getDay = `0${getDay}` }
  if (getDay == 5) { getDay = `0${getDay}` }
  if (getDay == 6) { getDay = `0${getDay}` }
  if (getDay == 7) { getDay = `0${getDay}` }
  if (getDay == 8) { getDay = `0${getDay}` }
  if (getDay == 9) { getDay = `0${getDay}` }

  // Month
  if (getMonth == 1) { getMonth = `0${getMonth}` }
  if (getMonth == 2) { getMonth = `0${getMonth}` }
  if (getMonth == 3) { getMonth = `0${getMonth}` }
  if (getMonth == 4) { getMonth = `0${getMonth}` }
  if (getMonth == 5) { getMonth = `0${getMonth}` }
  if (getMonth == 6) { getMonth = `0${getMonth}` }
  if (getMonth == 7) { getMonth = `0${getMonth}` }
  if (getMonth == 8) { getMonth = `0${getMonth}` }
  if (getMonth == 9) { getMonth = `0${getMonth}` }
}