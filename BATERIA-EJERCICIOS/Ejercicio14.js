const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  const contadorPalabras = {}

  for (const palabra of param) {
    if (palabra in contadorPalabras) {
      contadorPalabras[palabra]++
    } else {
      contadorPalabras[palabra] = 1
    }
  }

  return contadorPalabras
}

console.log(repeatCounter(counterWords))
