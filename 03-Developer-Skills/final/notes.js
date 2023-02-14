// 'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // Understanding the problem
// // what is temp ampltude? : difference between highest and lowest temp
// // how to compute max and min temperatures?
// // whats a sensor error? and what to do?

// //Breaking up into sub problems
// // - How to ignore errors
// // - Find max value in temp array
// // - Find min value in temp array
// // = Subtract min from max (amplutude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temperatures[0];
//   for (let i = 0; i < temperatures.length; i++) {
//     if (temps[i] > max) max = temps[i];
//   }
//   console.log(max);
// };
// calcTempAmplitude(3, 7, 4);

// function solution(str) {
//   let splitString = str.split('');
//   let reverseString = splitString.reverse();
//   let joinString = reverseString.join('');
//   return joinString;
// }

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsis',

//     value: Number(prompt('Degrees celsius')),
//   };
//   console.log(measurement.value);
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());
