function rollDice(numeroCaras) {
  return (numero = Math.floor(Math.random() * numeroCaras) + 1)
}

const numeroCaras1 = 6
const resultado1 = rollDice(numeroCaras1)
console.log(`Con ${numeroCaras1} caras me ha salido: ${resultado1}`)
const numeroCaras2 = 30
const resultado2 = rollDice(numeroCaras2)
console.log(`Con ${numeroCaras2} caras me ha salido: ${resultado2}`)
