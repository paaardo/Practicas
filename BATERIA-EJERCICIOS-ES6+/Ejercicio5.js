// 5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const mayores = ages.filter((age) => age > 18)

console.log(mayores)

// 5.2
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const pares = ages1.filter((age) => age % 2 === 0)

console.log(pares)

// 5.3
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const leagueOfLegends = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)

console.log(leagueOfLegends)

// 5.4
const streamers1 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const conLaU = streamers1.filter((streamer) => streamer.name.includes('u'))

console.log(conLaU)

// 5.5
const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const streamerFiltrados = streamers2.filter((streamer) => {
  if (streamer.gameMorePlayed.includes('Legends')) {
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
    }
    return true
  }
  return false
})

console.log(streamerFiltrados)

// 5.6
const streamers3 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const input = document.getElementById('filterInput')

input.addEventListener('input', function () {
  const contenido = this.value.toLowerCase()

  const streamersHTML = streamers3.filter((streamer) =>
    streamer.name.toLowerCase().includes(contenido)
  )

  console.log(streamersHTML)
})
