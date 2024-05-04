const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let suma = 0
  for (const elemento of param) {
    if (typeof elemento === 'number') {
      suma += elemento
    } else if (typeof elemento === 'string') {
      suma += elemento.length
    }
  }
  return suma
}

console.log(averageWord(mixedElements))
