// 4.1
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const nombres = users.map((user) => user.name)

console.log(nombres)

// 4.2
const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const cambiarNombre = users2.map((user) => {
  return user.name[0] === 'A' ? 'Anacleto' : user.name
})

console.log(cambiarNombre)

// 4.3
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]

const cambiarCiudades = cities.map((city) => ({
  ...city,
  name: city.isVisited ? `${city.name} (Visitado)` : city.name
}))

console.log(cambiarCiudades)
