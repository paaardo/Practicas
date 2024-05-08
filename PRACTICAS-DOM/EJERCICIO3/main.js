// 1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')

countries.forEach((continente) => {
  const li = document.createElement('li')
  li.textContent = continente
  ul.appendChild(li)
})

document.body.appendChild(ul)

// 1.2
const eliminarElemento = document.querySelector('.fn-remove-me')
eliminarElemento.remove()

// 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const divAtributo = document.querySelector('[data-function="printHere"]')
const ulCoches = document.createElement('ul')

cars.forEach((coche) => {
  const li = document.createElement('li')
  li.textContent = coche
  ulCoches.appendChild(li)
})

divAtributo.appendChild(ulCoches)

// 1.4
const countriesData = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const contenedorDivs = document.createElement('div')
contenedorDivs.classList.add('contenedor-divs')
countriesData.forEach((data) => {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = data.title
  const img = document.createElement('img')
  img.src = data.imgUrl
  div.appendChild(h4)
  div.appendChild(img)
  contenedorDivs.appendChild(div)
})

document.body.appendChild(contenedorDivs)

// 1.5
function eliminarUltimoDiv() {
  const contenedorDivs = document.querySelector('.contenedor-divs')
  const divs = contenedorDivs.querySelectorAll('div')
  const ultimoDiv = divs[divs.length - 1]
  if (ultimoDiv) {
    ultimoDiv.remove()
  }
}

const eliminarUltimo = document.createElement('button')
eliminarUltimo.textContent = 'Borrar ultimo div'
eliminarUltimo.addEventListener('click', eliminarUltimoDiv)
document.body.appendChild(eliminarUltimo)

// 1.6
const contenedorDivs2 = document.querySelector('.contenedor-divs')
const divs = contenedorDivs2.querySelectorAll('div')

function eliminarDivEspecifico() {
  this.parentNode.remove()
}

divs.forEach((div) => {
  const botonEliminar = document.createElement('button')
  botonEliminar.textContent = 'Eliminar div'
  botonEliminar.addEventListener('click', eliminarDivEspecifico)
  div.appendChild(botonEliminar)
})
