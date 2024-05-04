const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let palabraLarga = param[0]

  for (let i = 1; i < param.length; i++) {
    if (param[i].length > palabraLarga.length) {
      palabraLarga = param[i]
    }
  }
  return palabraLarga
}

console.log(findLongestWord(avengers))
