const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
const peliculaPeque = []
const peliculaMediana = []
const peliculaLarga = []

for (let i = 0; i < movies.length; i++) {
  const peli = movies[i]
  if (peli.durationInMinutes < 100) {
    peliculaPeque.push(peli)
  } else if (peli.durationInMinutes >= 100 && peli.durationInMinutes < 200) {
    peliculaMediana.push(peli)
  } else {
    peliculaLarga.push(peli)
  }
}

console.log('Peliculas pequeñas:')
console.log(peliculaPeque)

console.log('Peliculas medianas:')
console.log(peliculaMediana)

console.log('Peliculas grandes:')
console.log(peliculaLarga)
