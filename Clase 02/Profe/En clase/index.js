'use strict'
// # Programación funcional

// 1. Concepto general
//    * Funciones puras, no es afectada ni afecta el contexto externo

// const message = 'Juan'

// function showMessage () {
//   let message
//   console.log(message)
// }

// showMessage()

// function showMessage (message) {
//   console.log(message)
// }

// showMessage('Pachi no te duermas!')

// function mult (a, b) {
//   return a * b
// }

// console.log(mult(2, 3))

//    * Transparencia referencial, a igual valores de entrada igual resultado

// function showValue (a) {
//   return Math.random() * a
// }

// console.log(showValue(5))

// console.log(showValue(5))

//    * Inmutabilidad, evitar los cambios de estado especialmente objetos o arrays!

// const arrayGlobal = [ 1111, 2222, 3333 ]

// function showMessage (array) {
//   const arrayShallowCopy = array.slice()
//   arrayShallowCopy.push(4444)
//   console.log(arrayShallowCopy)
// }

// console.log(arrayGlobal)

// showMessage(arrayGlobal)

// console.log(arrayGlobal)

// 2. Imperativa, ¿Como lo estamos haciendo? vs Declarativa, ¿Que estamos haciendo?

// const arrayGlobal = [ 1111, 2222, 3333 ]

// function searchIndex (numbers, value) {
//   let index = -1
//   for (var i = 0; i < numbers.length; i++) {
//     let number = numbers[i]
//     if (number === value) {
//       index = i
//       break
//     }
//   }
//   return index
// }

// console.log(arrayGlobal.length)

// console.log(searchIndex(arrayGlobal, 1111))

// console.log(arrayGlobal.indexOf(1111))

// 3. Operador unario o If in-line

// const arrayGlobal = [ 1111, 2222, 3333 ]

// function phoneExists (array, number) {
//   if (array.indexOf(number) !== -1) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(phoneExists(arrayGlobal, 1111))

// console.log(arrayGlobal.indexOf(1111) !== -1 ? true : false)

// 4. Map

// const numbers = [ 1, 2, 3, 4, 5 ]

// function squareArray (array) {
//   let squareNumbers = []
//   for (var i = 0; i < array.length; i++) {
//     squareNumbers.push(array[i] * array[i])
//   }
//   return squareNumbers
// }

// const newNumbers = squareArray(numbers)

// console.log(newNumbers)
// console.log(numbers)

// const newNumbers = numbers.map((item) => item * item)

// console.log(newNumbers)
// console.log(numbers)

// 5. Filter
// 6. Find

// const fruits = [
//   {
//     name: 'Pera',
//     color: 'Verde'
//   },
//   {
//     name: 'Sandía',
//     color: 'Verde'
//   },
//   {
//     name: 'Banana',
//     color: 'Amarillo'
//   }
// ]

// function searchFruit (fruits, name) {
//   let fruitSearched
//   for (var i = 0; i < fruits.length; i++) {
//     let fruit = fruits[i]
//     if (fruit.name === name) {
//       fruitSearched = fruit
//       break
//     }
//   }
//   return fruitSearched
// }

// console.log(fruits.find((item) => item.name === 'Banana'))

// 7. Reduce

// # Clases en JS / "Objetos"

// 1. Sintaxis
// 2. Constructores
// 3. Extends
// 4. Super
// 5. Get
// 6. Set

// class User {
//   constructor (firstName, lastName, age) {
//     this._firstName = firstName
//     this._lastName = lastName
//     this._age = age
//   }

//   get firstName () {
//     return this._firstName
//   }

//   get fullName () {
//     return `${this._firstName || ''} ${this._lastName || ''}`
//   }

//   get age () {
//     return this._age
//   }

//   set firstName (firstName) {
//     this._firstName = firstName
//   }
// }

// class ExtendedUser extends User {
//   constructor (firstName, lastName, age, fruit) {
//     super(firstName, lastName, age)
//     this._fruit = fruit
//   }

//   get fruit () {
//     return this._fruit
//   }

//   showAll () {
//     console.log(`${super.fullName} ${this._age} ${this.fruit}`)
//   }
// }

// const user = new ExtendedUser('Luciano', 'Pachi', 65, 'Banana')

// console.log(user.fullName)

// user.firstName = 'Pato'

// user.showAll()

// 7. Construcción de objetos con Arrays

// class User {
//   constructor (firstName, lastName, age) {
//     this._firstName = firstName
//     this._lastName = lastName
//     this._age = age
//   }

//   get firstName () {
//     return this._firstName
//   }

//   get fullName () {
//     return `${this._firstName || ''} ${this._lastName || ''}`
//   }

//   get age () {
//     return this._age
//   }

//   set firstName (firstName) {
//     this._firstName = firstName
//   }

//   showAll () {
//     console.log(`${this.fullName} ${this.age}`)
//   }
// }

// const usersArray = [
//   {
//     firstName: 'Luciano',
//     age: 22
//   },
//   {
//     firstName: 'Gus',
//     lastName: 'Giannini'
//   }
// ]

// const user0 = usersArray[0]

// const user = new User(user0.firstName, user0.lastName, user0.age)

// user.showAll()

// const usersArray = [
//   {
//     firstName: 'Luciano',
//     age: 22
//   },
//   {
//     firstName: 'Gus',
//     lastName: 'Giannini'
//   }
// ]

// usersArray.push({
//   firstName: 'Luciano',
//   lastName: 'Pachi'
// })

// const usersArray = [
//   {
//     firstName: 'Luciano',
//     age: 22
//   },
//   {
//     firstName: 'Gus',
//     lastName: 'Giannini'
//   },
//   {
//     firstName: 'Luciano',
//     lastName: 'Pachi'
//   }
// ]

// const value = ' '

// if (value) {
//   console.log('Verdadero')
// } else {
//   console.log('Falso')
// }
