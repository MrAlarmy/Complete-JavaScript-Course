//*LECTURE: Values and Variables
// const country = 'USA'
// const continent = 'North America'
// let population = 331.9

// console.log(country)
// console.log(continent)
// console.log(population)

//* LECTURE: Data Types

// const isIsland = false
// let language // empty value

// console.log(typeof isIsland)
// console.log(typeof language)
// console.log(typeof population)
// console.log(typeof country)

//* LECTURE: let, const and var

// language = 'English'

//*LECTURE: Basic Operators
// const finland = 6
// let averagePopulation = 33.3

// console.log(population / 2)
// population++
// console.log(population)
// console.log(population > finland)
// console.log(population < averagePopulation)
// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
// console.log(description)

//*LECTURE: Taking Decisions: if / else Statements
// const avgPop = averagePopulation - population
// if (population > 33) {
//   console.log(`${country}'s population is above average`)
// } else {
//   console.log(`${country} population is ${avgPop} million below average`)
// }

//*CODING CHALLENGE 2

// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// // const massMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2
// const BMIJohn = massJohn / (heightJohn * heightJohn)
// console.log(BMIMark, BMIJohn)

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
// }

// '9' - '5' 4
// '19' - '13' + '17' = 617
// '19' - '13' + 17 = 23
// '123' < 57 = true
// 5 + 6 + '4' + 9 - 4 - 2 = 1143

//* LECTURE: Equality Operators: == vs. ===

const numNeighbors = Number(
  prompt('How many neighbor countries does your country have?'),
)

if (numNeighbors === 1) {
  console.log('Only 1 border!')
} else if (numNeighbors > 1) {
  console.log('More than 1 border')
} else if (numNeighbors === 0) {
  console.log('No borders')
}

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const averageScoreDolphins = 96 + 108 + 89 / 3
// const averageScoreKoalas = 88 + 91 + 110 / 3

// if (averageScoreDolphins < averageScoreKoalas) {
//   console.log('Koalas have won! ')
// } else if (averageScoreDolphins > averageScoreKoalas) {
//   console.log('Dolphins have won!')
// } else {
//   console.log('The teams have tied!')
// }

// BONUS

// // BONUS
// const averageScoreDolphins1 = 100
// const averageScoreKoalas1 = 130
// if (averageScoreDolphins1 < averageScoreKoalas1) {
//   if (averageScoreKoalas1 > 100) {
//     console.log('Koalas have won! ')
//   } else {
//     console.log('Nobody has won')
//   }
// } else if (averageScoreDolphins1 > averageScoreKoalas1) {
//   if (averageScoreDolphins1 > 100) {
//     console.log('Dolphins have won!')
//   }
// } else {
//   if (averageScoreDolphins1 < 100 && averageScoreKoalas1 < 100) {
//     console.log('Nobody gets the trophy!')
//   } else {
//     console.log('Teams have tied')
//   }
// }

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

// const bill = 275
// const tip = bill(bill >= 50) && bill <= 300 ? bill * 0.2 : bill * 0.15
// console.log(
//   `The bill was ${bill} the tip was ${tip} and the total is ${bill + tip}`,
// )

const country = 'US'
const continent = 'North America'
let population = 330000000
let finlandpopulation = 6000000
const language = 'English'
const isIsland = false
const unitedStatesHalfed = population / 2
const populationIncrease = population++
const description = `Portugal is in Europe, and its 11 million people speak portuguese`
if (population > finlandpopulation) {
  console.log('United states has a higher population!')
} else {
  console.log('Finland has a higher population')
}

console.log(country)
console.log(continent)
console.log(population)
console.log(populationIncrease)
console.log(unitedStatesHalfed)

console.log(typeof country)
console.log(typeof continent)
console.log(typeof population)
console.log(typeof isIsland)
