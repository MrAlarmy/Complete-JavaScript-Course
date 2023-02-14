// let age = 30 // Variable that can change
// age = 31
// const birthYear = 1991 // CANNOT change the VALUE of the variable or "IMMUTABLE variable"

// const now = 2037
// // const ageJonas = now - 1991
// // const ageSarah = now - 2018
// console.log(ageJonas, ageSarah)

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3) //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas'
// const lastName = 'Horton'
// console.log(firstName + ' ' + lastName)

// //* = is an operator itsself
// //* in the example below x is an operator as well a character that represents
// //* a specific mathematical or logical action or process

// //! OPERATORS

// let x = 10 + 5 //15
// x += 10 // x = x + 10
// x *= 4 //x = x * 4 = 100
// x++ // x = x + 1
// x-- // x = x - 1
// console.log(x)

// //! Comparison Operators

// const ageJonas = now - 1991
// const ageSarah = now - 2018

// // console.log(ageJonas > ageSarah)
// // console.log(ageSarah >= 18)

// const isFullAge = ageSarah >= 18
// console.log(now - 1991 > now - 2018)

// let x, y
// x = y = 25 - 10 - 5 // x = y = 10, x = 10
// console.log(x, y)

// const averageAge = ageJonas + ageSarah / 2
// console.log(ageJonas, ageSarah, averageAge)

// const marksWeight = 50
// const marksHeight = 1.69
// const johnsHeight = 1.95
// const johnsWeight = 92

// const bodyMassIndex = marksWeight / marksHeight ** 2
// const bodyMassIndex1 = johnsWeight / johnsHeight ** 2
// console.log(bodyMassIndex1, bodyMassIndex)

// const markHigherBMI = bodyMassIndex > bodyMassIndex1
// console.log(markHigherBMI)

// const firstName = 'Blake'
// const job = 'Unenployed'
// const birthYear = '2003'
// const year = 2023

// const blake =
//   "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
// console.log(blake)

// const blakeNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`
// console.log(blakeNew)

// console.log(`Just a regular string...`)

// console.log(
//   'String with \n\
// multiple \n\
// lines',
// )
//!`` backticks are way easier for multilines
// console.log(`String
// miltiple
// fricken
// lines`)

//! IF ELSE statements

// const age = 15
// if (age >= 18) {
//   console.log('Sarah can start driving🚗')
// } else {
//   const yearsLeft = 18 - age
//   console.log(`Sarah can not start driving for another ${yearsLeft} years`)
// }

// const birthYear = 2003
// if (birthYear <= 2000) {
//   century = 20
// } else {
//   century = 21
// }
// console.log(century)

//TYPE CONVERSION

// const inputYEAR = '1991'
// console.log(Number(inputYEAR))
// console.log(Number(inputYEAR) + 18)
// console.log(inputYEAR + 18) // adds a string to a number
// console.log(String(23), 23)

// //Type coercion
// console.log('I am ' + 23 + ' years old')
// console.log('I am ' + '23' + ' years old')
// console.log('23' - '10' - 3)

// let n = '1' + 1
// n = n - 1
// console.log(n)

// 5 falsy values: 0, '', undefined, null, NaN

// IF STATEMENTS WILL CHECK BOOLEANS FIRST,

// console.log(Boolean(0)) // FALSE
// console.log(Boolean(undefined)) // FALSE
// console.log(Boolean('Jonas')) // TRUE
// console.log(Boolean({})) / TRUE
// console.log(Boolean('')) / FALSE
// console.log(Boolean(-30))/ TRUE
// const money = 0

// if (money) {
//   console.log('Dont Spend it all')
// } else {
//   console.log('You Should get a job!')
// }

// let height
// if (height) {
//   console.log('YAY! Height is defined')
// } else {
//   console.log('Height is UNDEFINED')
// }

// const age = 18
// if (age === 18) console.log('You just became an adult')
// 18 === 18 //true
// 18 === 19 //false
// '18' == 18 // true
// '18' === 18 // false

// const favorite = Number(prompt("What's your favorite number?"))
// console.log(favorite)
// console.log(typeof favorite)

// if (favorite === 23) {
//   console.log('Cool! 23 is an amazing number!')
// } else if (favorite === 7) {
//   console.log('7 is also a cool number')
// } else if (favorite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7')
// }

// if (favorite !== 23) console.log('Why not 23?')

// const age = 18
// const hasDriversLicense = true //A
// const hasGoodVision = false // B

// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)

// const shouldDrive = hasDriversLicense && hasGoodVision

// if (shouldDrive) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log('Someone else shuld drive...')
// }
// const isTired = false // C
// console.log(hasDriversLicense && hasGoodVision && isTired)

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log('Someone else shuld drive...')
// }

// const averageScoreDolphins = 96 + 108 + 89 / 2
// const averageScoreKoalas = 88 + 91 + 110 / 2
// console.log(averageScoreDolphins + ' Dolphins Score')
// console.log(averageScoreKoalas + ' Koalas score')
// if (averageScoreDolphins < averageScoreKoalas) {
//   console.log('Koalas have won! ')
// } else if (averageScoreDolphins > averageScoreKoalas) {
//   console.log('Dolphins have won!')
// } else {
//   console.log('The teams have tied!')
// }

// const day = 'Thursday'

// switch (day) {
//   case 'Monday': // day = 'Monday'
//     console.log('Plan course structure')
//     console.log('Go to coding meetup')
//     break
//   case 'Tuesday':
//     console.log('Prepare theory videos')
//     break
//   case 'Wednesday':
//     break
//   case 'Thursday':
//     console.log('Write code examples')
//     break
//   case 'Friday':
//     console.log('Record Videos')
//     break
//   case ' Saturday':
//     break
//   case 'Sunday':
//     console.log('Enjoy the weekend :D')
//     break
//   default:
//     console.log('Not a valid day')
// }

//! EXPRESSIONS

// 3 + 4
// 1991
// true && false && !false

// if (23>10) {
//   const str = '23 is bigger' // string itself is a expression whole line of code is a statement / statements are like a full sentence
// }

// const age = 23
// age >= 18
//   ? console.log('I dont like to drink wine')
//   : console.log('I dont like to drink water')

// const drink = age >= 18 ? 'wine' : ' water'
// console.log(drink)

// let drink2
// if (age >= 18) {
//   drink2 = 'wine'
// } else {
//   drink2 = 'water'
// }
// console.log(drink2)

// console.log(`I like to drink `)

// const bill = 40
// const tip = bill >= 50 && bill <= 300 ? bill * 0.2 : bill * 0.15
// console.log(
//   `The bill was ${bill} the tip was ${tip} and the total is ${bill + tip}`,
// )

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges)
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

// //!Function Decleration

// function calcAge1(birthYear) {
//   return 2037 - birthYear
// }

// const age1 = calcAge1(1991)
// console.log(age1)

// //! Fuction Expression

// const calcAge2 = function(birthYear) {
//   return 2037 - birthYear
// }
// const age2 = calcAge2(1991)
// console.log(age2)

// const calcAge3 = (birthYear) => 2037 - birthYear
// const age3 = calcAge3(1991)
// console.log(age3)

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear
//   const retirement = 65 - age
//   // return retirement
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'))
// console.log(yearsUntilRetirement(1980, 'Bob'))

// function cutFruitPieces(fruit) {
//   return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples)
//   const orangePieces = cutFruitPieces(oranges)
//   console.log(apples, oranges)
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
//   return juice
// }

// console.log(fruitProcessor(2, 3))

// const calcAge = function (birthYear) {
//   return 2023 - birthYear
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age

//   if (retirement > 0) {
//     console.log(`${firstName} retirement in ${retirement} years`)
//     return retirement
//   } else {
//     console.log(`${firstName} has already retired!`)
//     return -1
//   }
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'))
// console.log(yearsUntilRetirement(1950, 'Mike'))

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �

/**
 * This function will calculate the average of 3 scores and return the result
 */
// const calcAverage = (a, b, c) => a + b + c / 3

// const avgDolphinsData1 = calcAverage(44, 23, 71)
// const avgDolphinsData2 = calcAverage(85, 54, 41)
// const avgKoalasData1 = calcAverage(65, 54, 49)
// const avgKoalasData2 = calcAverage(23, 34, 27)

// console.log('Average Scores (Data set 1)', avgDolphinsData1, avgKoalasData1)
// console.log('Average Scores (Data set 2)', avgDolphinsData2, avgKoalasData2)

// /**
//  * This function will check the winner of the game
//  */
// function checkWinner(dolphinData, koalaData) {
//   if (dolphinData >= 2 * koalaData) {
//     console.log(`Dolphins have won by ${dolphinData} to Koalas ${koalaData}`)
//   } else if (koalaData >= 2 * dolphinData) {
//     console.log(`Koalas have won by ${koalaData} to Dolphins ${dolphinData}`)
//   } else {
//     console.log('No teams have won')
//   }
// }

// checkWinner(avgDolphinsData1, avgKoalasData1)
// checkWinner(avgDolphinsData2, avgKoalasData2)

// const friends = ['Michael', 'Steven', 'Peter']

// //Add Elemets
// const newLenth = friends.push('Jay')
// console.log(friends)
// console.log(newLength)

// friends.unshift('John')
// console.log(friends)

// //remove elements
// friends.pop() // Last
// const popped = friends.pop
// console.log(popped)
// console.log(friends)

// friends.shift
// console.log(friends)

// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('Bob'))

// friends.push(23)
// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))
// console.log(friens.includes(23))

// if (friends.includes('Peter')) {
//   console.log('You have a friend called Peter')
// } else if (friends.includes('Steven')) {
//   console.log('you have a friend called steven')
// }

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }
// const bill = [125, 555, 44]
// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
// console.log(bill, tips)
// const totalBill1 = [calcTip(bill[0]) + tips[0]]
// const totalBill2 = [calcTip(bill[1]) + tips[1]]
// const totalBill3 = [calcTip(bill[2]) + tips[2]]
// console.log(totalBill1)
// console.log(totalBill2)
// console.log(totalBill3)

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Blake',
//   age: 2023 - 2003,
//   job: 'Software Engieer',
//   friends: ['Blake', 'Paul', 'Tanner', 'Brennen'],
// }

// console.log(jonas.lastName)
// console.log(jonas['lastName'])

// const nameKey = 'Name'
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const interestedIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends',
// )
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn])
// } else {
//   console.log(
//     'Wrong request! Choose between firstName, lastName, age, job, and friends',
//   )
// }

// jonas.location = 'Utah'
// jonas['twitter'] = '@blakehortonn'
// console.log(jonas)

// // Challenge
// // Jonas has 3 friends, and his best friend is called Michael

// console.log(
//   `${jonas.firstName} has ${[
//     jonas.friends.length,
//   ]} friends and his best friend is called ${jonas.friends[0]}`,
// )

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Blake',
//   birthYear: 2003,
//   job: 'Software Engieer',
//   friends: ['Blake', 'Paul', 'Tanner', 'Brennen'],
//   hasDriversLiscense: true,

//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear
//   // },

//   // calcAge: function () {
//   //   console.log(this)
//   //   return 2023 - this.birthYear
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear
//     return this.age
//   },
// }

// const getSummary = console.log(jonas.calcAge())
// console.log(jonas.age)

// // Challenge
// // "Jonas is a 46-Year old teacher, and he has a drivers liscense"

// // Ternary
// // condition ? true : false

// function doStuff() {
//   if (jonas.hasDriversLiscense) {
//     return 'he has a drivers liscense'
//   } else {
//     return 'he has no drivers liscense'
//   }
// }

// const test = doStuff()

// console.log(
//   `${jonas.firstName} is a ${jonas.age} old teacher, and ${
//     jonas.hasDriversLiscense
//       ? 'he has a drivers liscense'
//       : 'he has no drivers liscense'
//   }`,
// )

// const marksBMI = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   height: 1.69,
//   weight: 78,
//   bmi: 0,

//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2
//   },
// }

// const marksBMITest = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   height: 1.69,
//   weight: 78,
//   bmi: () => this.weight / this.height ** 2,
// }

// const johnsBMI = {
//   firstName: 'John',
//   lastName: 'Smith',
//   height: 1.95,
//   weight: 92,
//   bmi: 0,

//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2
//   },
// }
// johnsBMI.calcBMI()
// marksBMI.calcBMI()
// console.log(johnsBMI.bmi)

// console.log(marksBMI.bmi > johnsBMI.bmi ? '' : '')

// if (johnsBMI.calcBMI > marksBMI.calcBMI) {
//   console.log(`Johns BMI ${johnsBMI.bmi} is higher than marks ${marksBMI.bmi}`)
// } else {
//   console.log(`Marks BMI ${marksBMI.bmi} is higher than johns ${johnsBMI.bmi}`)
// }

//for loop keeps running while condition is TRUE

// for (let rep = 1; rep <= 1000; rep++) {
//   console.log(`Lifting weights repition ${rep}`)
// }

// const jonas = [
//   'Jonas',
//   'Scmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
// ]
// const types = []

// console.log(jonas[1])
// console.log(jonas[2])
//...
//jonas[5] does NOT exist

// for (let i = 0; i < jonas.length; i++) {
//   // reading from jonas array
//   console.log(jonas[i], typeof jonas[i])
//   // filling types of array
//   // types[i] = typeof jonas[i]
//   types.push(typeof jonas[i])
// }

// console.log(types)

// const years = [1991, 2007, 1969, 2020]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i])
// }
// console.log(ages)

// // continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue

//   console.log(jonas[i], typeof jonas[i])
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break

//   console.log(jonas[i], typeof jonas[i])
// }

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
// ]

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i])
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----------- Starting exercise ${exercise} `)

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repition ${rep}`)
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repition ${rep}`)
// }

// let rep = 1
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weight repition ${rep}`)
//   rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`)
//   dice = Math.trunc(Math.random() * 6) + 1
//   if (dice === 6) console.log('Loop is about to end...')
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

for (i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]))
  totals.push(tips[i] + bills[i])
}
console.log(bills)
console.log(tips)
console.log(totals)
