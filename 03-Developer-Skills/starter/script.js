// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const calc = function (temps) {
//   let max = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) max = temps[i];
//   }
//   console.log(max);
// };
// calc([2, 32, 34, 4, 4, 5, 565]);

// const kelvin = function () {
//   const measure = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };

//   console.log(measure.value);
//   const kelv = measure.value + 273;
//   return kelv;
// };

// console.log(kelvin());
const printForecast = function (arr) {
  let sen = '...';
  for (let i = 0; i < arr.length; i++) {
    sen += ` ${arr[i]}'C in ${i + 1} days ... `;
  }
  return sen;
};

const d1 = [17, 21, 23];
const d2 = [12, 5, -5, 0, 4];
console.log(printForecast(d1));
console.log(printForecast(d2));
