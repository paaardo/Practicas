// 1.1
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])

// 1.2
avengers[0] = 'IRONMAN'

// 1.3
console.log(avengers.length)

// 1.4
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

// 1.5
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
console.log(rickAndMortyCharacters2[0])
console.log(rickAndMortyCharacters2.pop())

// 1.6
const rickAndMortyCharacters3 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters3.splice(1, 1)
console.log(rickAndMortyCharacters3)
