const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let suma = 0
  for (const numero of param) {
    suma += numero
  }
  return suma / param.length
}

console.log(average(numbers))
