const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(param, nombre) {
  for (let i = 0; i < param.length; i++) {
    if (param[i] === nombre) {
      return [true, i]
    }
  }
  return [false]
}

console.log(finderName(nameFinder, 'Tony')) // Salida esperada: [true, 2]
console.log(finderName(nameFinder, 'Barry')) // Salida esperada: false
