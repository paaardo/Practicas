// 8.1
const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
]
const filtradoRPG = videogames.filter((juego) => juego.genders.includes('RPG'))
const puntuacionMedia = filtradoRPG.reduce((acumulado, juego, index, array) => {
  acumulado += juego.score
  if (index === array.length - 1) {
    return acumulado / array.length
  } else {
    return acumulado
  }
}, 0)

console.log(puntuacionMedia)
