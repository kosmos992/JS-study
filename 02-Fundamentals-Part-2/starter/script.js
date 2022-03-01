"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive");

// const interface = "Audio";
*/

// function logger() {
//   console.log("my name is yechan");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);

// 함수 선언 전 호출 가능
// const age1 = calcAge1(1998);
// console.log(age1);

// function calcAge1(birth) {
//   const age = 2037 - birth;
//   return age;
// }

// // 이렇게 선언하면 선언 전 호출 불가능
// const calcAge2 = function (birth) {
//   const age = 2037 - birth;
//   return age;
// };

// const age2 = calcAge2(1998);
// console.log(age2);

// const calcAge3 = (birth) => 2037 - birth;
// console.log(calcAge3(19238));

// 관여한 변수가 2개 이상이면 리턴을 해줘야
// const untilRetire = (birth, name) => {
//   const age = 2037 - birth;
//   const retire = 65 - age;
//   return `${retire} years left, ${name}.`;
// };

// console.log(untilRetire(1998, "yechan"));

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDol = calcAverage(85, 54, 41);
// const avgKoa = calcAverage(23, 34, 27);

// function checkwinner(dol, koa) {
//   if (dol >= koa * 2) console.log(`Dolphins win (${dol} vs. ${koa})`);
//   else if (dol * 2 <= koa) console.log(`Koalas win (${dol} vs. ${koa})`);
//   else console.log("No team wins");
// }

// checkwinner(avgDol, avgKoa);
// const friends = ["michael", "steven", "peter"];
// console.log(friends);
// console.log(friends[0]);

// const years = new Array(1991, 1984, 2008, 2020);

// function calcAge1(birth) {
//   const age = 2037 - birth;
//   return age;
// }

// const friends = ["michael", "steven", "peter"];
// friends.push("Jay");
// console.log(friends);

// friends.unshift("어레이 앞쪽에 요소 추가");
// friends.pop(); // 마지막 요소 삭제
// friends.shift(); // 첫번째 요소 삭제
// console.log(friends);
// console.log(friends.indexOf("peter"));

// console.log(friends.includes("michael"));

// function calcTip(bill) {
//   bill >= 50 && bill <= 300 ? (bill *= 0.15) : (bill *= 0.2);
//   return bill;
// }

// const bills = [125, 555, 44];
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Koo",
//   age: 2021 - 1998,
//   job: "student",
//   friends: ["a", "b", "c"],
// };

// // console.log(jonas);

// // console.log(jonas.lastName);
// // console.log(jonas["lastName"]);

// // const nameKey = "Name";
// // console.log(jonas["first" + nameKey]);
// // console.log(jonas["last" + nameKey]);

// // const a = prompt("What do you want to know about me? Choose between ...");

// // if (jonas[a]) console.log(jonas[a]);
// // else console.log("뭐라는거야");

// // jonas.location = "Korea";
// // jonas["twitter"] = "none";
// // console.log(jonas);

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}.`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Koo",
//   birthYear: 1998,
//   job: "student",
//   friends: ["a", "b", "c"],
//   drive: true,
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSum: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year-old ${
//       this.job
//     } with ${this.drive ? "a" : "no"} license.`;
//   },
// };

// console.log(jonas.getSum());

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas["calcAge"](1882));

// const mark = {
//   n: "Mark Miller",
//   w: 58,
//   h: 1.69,
//   bmi: function () {
//     this.bmi = this.w / this.h ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   n: "John Smith",
//   w: 92,
//   h: 1.95,
//   bmi: function () {
//     this.bmi = this.w / this.h ** 2;
//     return this.bmi;
//   },
// };

// console.log(
//   mark.bmi() > john.bmi()
//     ? `${mark.n}'s BMI ${mark.bmi} is higher than ${john.n}'s ${john.bmi}`
//     : `${john.n}'s BMI ${john.bmi} is higher than ${mark.n}'s ${mark.bmi}`
// );

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lift repetition ${rep}`);
// }

// const jonas = [1, 3, 254, "hi", 443, 34, [3, 2, 34]];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "string") break;
//   console.log(jonas[i], typeof jonas[i]);

//   types[i] = typeof jonas[i];
// }

// console.log(types);

// const year = [1234, 546, 323, 342];
// const now = 2021;
// const age = [];
// for (let i = 0; i < year.length; i++) {
//   age.push(now - year[i]);
// }
// console.log(age);

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? (bill *= 0.15) : (bill *= 0.2);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
let average = 0;

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
  average += total[i];
}

console.log(tips);
console.log(total);
console.log(average / total.length);
