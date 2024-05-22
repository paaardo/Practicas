const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return 'Posicion: ' + i
    }
  }
  return 'No esta en el array'
}

console.log(findArrayIndex(mainCharacters, 'Anakin'))
console.log(findArrayIndex(mainCharacters, 'Real Madrid'))
console.log(findArrayIndex(mainCharacters, 'Han Solo'))
console.log(findArrayIndex(mainCharacters, 'Iker'))
