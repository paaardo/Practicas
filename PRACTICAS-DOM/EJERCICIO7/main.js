const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
const div = document.querySelector('[data-function="printHere"]')
const ul = document.createElement('ul')

places.forEach((lugares) => {
  const li = document.createElement('li')
  li.textContent = lugares
  ul.appendChild(li)
})

div.appendChild(ul)
