// 1.1
const divVacio = document.createElement('div')
document.body.appendChild(divVacio)

// 1.2
const divP = document.createElement('div')
const parrafo = document.createElement('p')
divP.appendChild(parrafo)
document.body.appendChild(divP)

// 1.3
const divPs = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const parrafoNuevo = document.createElement('p')
  divPs.appendChild(parrafoNuevo)
}
document.body.appendChild(divPs)

// 1.4
const nuevoParrafo = document.createElement('p')
nuevoParrafo.textContent = 'Soy dinámico!'
document.body.appendChild(nuevoParrafo)

// 1.5
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})
document.body.appendChild(ul)

// 1.7
const eliminarNodos = document.querySelectorAll('.fn-remove-me')
eliminarNodos.forEach((elemento) => elemento.remove())

// 1.8
const medio = document.createElement('p')
medio.textContent = 'Voy en medio!'
const primerDiv = document.querySelector('div:first-of-type')
primerDiv.insertAdjacentElement('afterbegin', medio)

// 1.9
const divs = document.querySelectorAll('.fn-insert-here')
divs.forEach((div) => {
  const voyDentro = document.createElement('p')
  voyDentro.textContent = 'Voy dentro!'
  div.appendChild(voyDentro)
})
