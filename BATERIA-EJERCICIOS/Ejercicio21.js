const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

console.log('Usuarios menores de edad:')
for (const usuarios of users) {
  if (usuarios.years < 18) {
    console.log(usuarios.name)
  }
}

console.log('Usuarios mayores de edad:')
for (const usuarios of users) {
  if (usuarios.years >= 18) {
    console.log(usuarios.name)
  }
}
