// 7.1
const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]
const sumaTotal = exams.reduce((acumulado, exam) => acumulado + exam.score, 0)

console.log(sumaTotal)

// 7.2
const sumaAprobados = exams.reduce((acumulado, exam) => {
  if (exam.score >= 5) {
    return acumulado + exam.score
  } else {
    return acumulado
  }
}, 0)

console.log(sumaAprobados)

// 7.3
const mediaTodos = exams.reduce((acumulado, exam, index, array) => {
  acumulado += exam.score
  if (index === array.length - 1) {
    return acumulado / array.length
  } else {
    return acumulado
  }
}, 0)

console.log(mediaTodos)
