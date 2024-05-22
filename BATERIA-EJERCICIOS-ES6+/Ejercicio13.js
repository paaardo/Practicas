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
      return i
    }
  }
  return 'No esta en el array'
}

function removeItem(array, text) {
  const posicionAEliminada = findArrayIndex(array, text)

  if (posicionAEliminada !== 'No esta en el array') {
    array.splice(posicionAEliminada, 1)
  }

  return array
}

console.log(removeItem(mainCharacters, 'Rey'))
console.log(removeItem(mainCharacters, 'Leia'))
console.log(removeItem(mainCharacters, 'Obi-Wan'))
