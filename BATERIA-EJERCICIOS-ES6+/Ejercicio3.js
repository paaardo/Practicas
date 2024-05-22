// 3.1
const pointsList = [32, 54, 21, 64, 75, 43]
const copia = [...pointsList]

console.log(copia)

// 3.2
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const copia2 = { ...toy }

console.log(copia2)

// 3.3
const pointsList1 = [32, 54, 21, 64, 75, 43]
const pointsList2 = [54, 87, 99, 65, 32]

const combinado = [...pointsList1, ...pointsList2]

console.log(combinado)

// 3.4
const toy1 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

const toyCombinado = { ...toy1, ...toyUpdate }

console.log(toyCombinado)

// 3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const colorsSinAmarillo = [...colors.slice(0, 2), ...colors.slice(3)]

console.log(colorsSinAmarillo)
