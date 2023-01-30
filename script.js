const switchBtn = document.querySelector('.btn')
const lights = document.querySelectorAll('.light')
let current = document.querySelector('.active')
let step = 1

switchBtn.onclick = switchToNextLight

function switchToNextLight() {
  const next = findNextLight()

  turnOff(current)
  turnOn(next)
  current = next
}

function findNextLight() {
  const i = getIndex(current)

  if (i === 2) step = -1
  if (i === 0) step = 1

  const next = lights[i + step]

  return next
}

function getIndex(el) {
  if (lights[0] === current) return 0
  if (lights[1] === current) return 1

  return 2
}

function turnOff(el) {
  el.classList.remove('active')
}

function turnOn(el) {
  el.classList.add('active')
}
