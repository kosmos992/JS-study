/*
let country = "Korea";
let continent = "Asia";
let population = "50M";

console.log(country);
console.log(continent);
console.log(population);

// 이것은 주석이여
let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof true);

jsIsFun = "Yes";
console.log(jsIsFun);

let age;
age = 30;
age = 31;

const birthYear = 1998;
// birthYear = 1990;

// const job;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10);

const isFullAge = ageSarah >= 18;

let x = 10 + 5;
x += 10;
console.log(x);


const massMark = 78;
const heightMark = 1.69;
const bmiMark = massMark / heightMark ** 2;

const massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiJohn, bmiMark, markHigherBMI);

const firstName = "Yechan";
const year = 2022;
const birthYear = 1998;
const job = "student";

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonasNew);

console.log(`안녕하세요`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);



const age = 11;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🤣");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(6 + 17 + 10 + 16 + 9 + 11 + 15 + 13 + 6 + 10 + 9 + 14);


const massMark = 78;
const heightMark = 1.69;
const bmiMark = massMark / heightMark ** 2;

const massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI) {
  console.log(
    `mark's bmi, which is ${bmiMark}, is higher than john's, which is ${bmiJohn}`
  );
} else {
  console.log(
    `mark's bmi, which is ${bmiMark}, is lower than john's, which is ${bmiJohn}`
  );
}

const inputYear = "1991";
const num = Number(inputYear);
console.log(inputYear, num);
console.log(Number(inputYear), inputYear);
console.log(String(2));


console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean({}));


const fav = prompt("what is your fav num?");
console.log(fav);
*/
// const day = "thursday";

// switch (day) {
//   case "monday":
//     console.log("일어나");
//     console.log("hi");
//     break;
//   case "tuesday":
//   case "thursday":
//     console.log("그냥..");
//     break;
//   default:
//     console.log("invalid");
// }

// if (day === "wednesday" || "thursday") console.log("yay!");
// const age = 1;
// age >= 18
//   ? console.log("i like to drink wine")
//   : console.log("i like to drink water");

// const drink = age >= 18 ? "wine" : "water;";
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
let tip;
const bill = 430;
console.log(
  `the bill was ${bill}, the tip was ${(tip =
    300 >= bill && bill >= 50
      ? bill * 0.15
      : bill * 0.2)}, and the total value ${tip + bill}`
);
