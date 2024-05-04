const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(param) {
  let suma = 0
  for (const numero of param) {
    suma += numero
  }
  return suma
}

console.log(sumAll(numbers))
