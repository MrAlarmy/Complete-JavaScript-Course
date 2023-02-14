'use strict'

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log('I can driver :D')

// function logger() {
//   console.log('My Name is Jonas')
// }
// //calling / running / invoking function
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges)
//   const abc = `juice with ${apples} apples and ${oranges} oranges.`
//   return abc
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

//!Function Declaration

// function calcAge1(birthYear) {
//   return 2023 - birthYear
// }

// const age1 = calcAge1(1991)

//!Function Expression

// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear
// }

// const age2 = calcAge2(1991)
// console.log(age2, age1)

//! Arrow Function

// const calcAge3 = (birthYear) => 2023 - birthYear

// const age3 = calcAge3(2003)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear
//   const retirement = 65 - age
//   // return retirement
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1950, 'Blake'))

// function cutFruitPieces(fruit) {
//   return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples)
//   const orangePieces = cutFruitPieces(oranges)

//   console.log(apples, oranges)
//   const abc = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
//   return abc
// }

// console.log(fruitProcessor(2, 3))

// const calcAge = function (birthYear) {
//   return 2023 - birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age

//   if (retirement > 0) {
//     return retirement
//     console.log(`${firstName} retires in ${retirement} years`)
//   } else {
//     return -1
//   }
// }

// const friend1 = 'Michael'
// const friend2 = 'Steven'

// //! Array
// const friends = ['Michael', 'Steven', 'Peter', 'Daddy']
// console.log(friends)

// const year = new Array(1991, 1984, 2008, 2020)

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length)
// console.log(friends[friends.length - 1])

// friends[2] = 'jay'

// console.log(friends)
// const firstName = 'Blake'
// const blake = [firstName, 'Horton', 2023 - 2003, 'Target', friends]
// console.log(blake)

//Exrcise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear
// }
// const years = [1990, 1967, 2002, 2010, 2018]

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[2])
// const age4 = calcAge(years[years.length - 1])
// console.log(age1, age2, age3, age4)

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[2]),
//   calcAge(years[3]),
//   calcAge(years[years.length - 1]),
// ]
// console.log(ages)

// const friends = ['Michael', 'Steven', 'Peter']

// const newLength = friends.push('Jay')
// console.log(friends)
// console.log(newLength)

// //! Add Elements

// // friends.push('Kevin') // ADDS TO THE END OF ARRAY
// friends.unshift('John') // ADDS TO THE BEGINING
// console.log(friends)

// //! Remove Elements

// friends.pop() // REMOVES LAST ARRAY
// const popped = friends.pop()
// console.log(popped)
// console.log(friends)
// friends.shift() // REMOVES FIRST ARRAY
// console.log(friends)

// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('Bob'))
// friends.push(23)
// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))
// console.log(friends.includes(23))
// // console.log(friends.includes('23')) 23 WONT BE PRINTED OUT BECAUSE ITS A STRING REFER TO LINE 158

// if (friends.includes('Steven')) {

const blake = {
  firstName: 'Jonas',
  lastName: 'Horton',
  age: 2037 - 2003,
  job: 'Nothing',
  friends: 'Stephen, Paul, Brennen',
}
console.log(blake)
console.log(blake.lastName)
console.log(blake[('lastName', 'job')])
