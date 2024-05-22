const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

function swap(array, posicion1, posicion2) {
  const contenedor = array[posicion1]
  array[posicion1] = array[posicion2]
  array[posicion2] = contenedor

  return array
}
const posicionCambiada = swap(fantasticFour, 0, 2)
console.log(posicionCambiada)
