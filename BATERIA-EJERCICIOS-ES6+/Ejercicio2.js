// 2.1
const game = {
  title: 'The Last of Us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
}

const { title, gender, year } = game

console.log(title)
console.log(gender)
console.log(year)

// 2.2
const fruits = ['Banana', 'Strawberry', 'Orange']

const [fruit1, fruit2, fruit3] = fruits

console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

// 2.3
const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' }
}

const { name, race } = animalFunction()

console.log(name)
console.log(race)

// 2.4
const car = { nameCar: 'Mazda 6', itv: [2015, 2011, 2020] }

const { nameCar, itv } = car
const [itv1, itv2, itv3] = itv

console.log(nameCar)
console.log(itv)
console.log(itv1)
console.log(itv2)
console.log(itv3)
