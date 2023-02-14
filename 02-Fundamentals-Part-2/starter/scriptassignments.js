// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const afghanistanInfo = describeCountry('Afghanistan', 22, 'Kabul')
// console.log(afghanistanInfo)
// const russiaInfo = describeCountry('Russia', 660, 'AVADOADOADoA')
// console.log(russiaInfo)
// const canada = describeCountry('Canda', 2002020, 'FRICKEIREKCIER')
// console.log(canada)

//! Function Decleration

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100
// }

// const worldOne = percentageOfWorld1(100234523452340)
// const worldTwo = percentageOfWorld1(1023452345200)
// const worldThree = percentageOfWorld1(10052345234520)
// console.log(worldOne, worldTwo, worldThree)

//! Expression Function

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100
// }

// const worldUno = percentageOfWorld2(45452345)
// const worldDos = percentageOfWorld2(3456453452345)
// const worldTres = percentageOfWorld2(345656)
// console.log(worldDos, worldUno, worldTres)

//! Arrow Function

// const percentageOfWorld3 = (population) => (population / 7900) * 100

// const worldOneBaby = percentageOfWorld3(12341234123)
// console.log(worldOneBaby)
// console.log(percentageOfWorld3(24532434))

//! CODING CHALLENGE

// const test = (value1, value2, value3) => (value1 + value2 + value3) / 3

// const koalasValues = test(65, 54, 49)
// const koalasValues1 = test(23, 34, 27)
// const dolphinsScore = test(44, 23, 71)
// const dolphinsScore1 = test(85, 54, 41)

// checkWinner(koalasValues, dolphinsScore)
// checkWinner(koalasValues1, dolphinsScore1)

// function checkWinner(koalasValues, dolphinsScore) {
//   if (koalasValues >= 2 * dolphinsScore) {
//     console.log(`Koalas win ${koalasValues} to ${dolphinsScore}`)
//   }
//   if (dolphinsScore >= 2 * koalasValues) {
//     console.log(`Dolhpins win ${dolphinsScore} to ${koalasValues}`)
//   } else {
//     console.log('No Teams have won!')
//   }
// }
// function checkWinner1(koalasValues1, dolphinsScore1) {
//   if (koalasValues >= 2 * dolphinsScore) {
//     console.log(`Koalas win ${koalasValues1} to ${dolphinsScore1}`)
//   }
//   if (dolphinsScore >= 2 * koalasValues) {
//     console.log(`Dolhpins win ${dolphinsScore1} to ${koalasValues1}`)
//   } else {
//     console.log('No Teams have won!')
//   }
// }

// function calcTip(bills) {
//   bills(bills >= 50) && bills <= 300 ? bills * 0.2 : bills * 0.15
// }

// const bills = [125, 555, 44]

// console.log

// const bill = 275
// const tip = bill(bill >= 50) && bill <= 300 ? bill * 0.2 : bill * 0.15
// console.log(
//   `The bill was ${bill} the tip was ${tip} and the total is ${bill + tip}`,
// )

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totals)
