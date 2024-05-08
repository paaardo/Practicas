// 1.1
const boton = document.createElement('button')
boton.textContent = 'Click'
boton.id = 'btnToClick'

document.body.appendChild(boton)

boton.addEventListener('click', function (event) {
  console.log('Has hecho click', event)
})

// 1.2
const focus = document.querySelector('.focus')

focus.addEventListener('focus', function () {
  console.log('Hiciste focus:', this.value)
})

// 1.3
const input = document.querySelector('.value')

input.addEventListener('input', function () {
  console.log('Hiciste input:', this.value)
})
