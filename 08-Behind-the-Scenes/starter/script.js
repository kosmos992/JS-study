'use strict';
/*

function calcAge(birth) {
  const age = 2047 - birth;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birth}`;
    console.log(output);

    if (birth >= 1981 && birth <= 1996) {
      var millenial = true;

      // Creating New variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'New OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
console.log(calcAge(1991));



// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Yechan';
let job = 'student';
const year = 1998;

// Functions
console.log(addDec(2, 3));
// console.log(addExp(2, 3));
console.log(addArr);
// console.log(addArr(2, 3)); === console.log(addArr);    var은 undefined로 받기 때문

function addDec(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

var addArr = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}



const calcAge = function (birth) {
  console.log(2037 - birth);
  // console.log(this);
};
calcAge(1991);

const calcAgeArr = birth => {
  console.log(2037 - birth);
  // console.log(this);
};
calcAgeArr(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 1998,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
jonas.f;



const jonas = {
  firstName: 'Koo',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Soulution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    // Solution 2 - 애로우 펑션은 부모 스코프로부터 this 키워드를 가져옴
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

// arguments keyword?



let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'yechan',
  age: 23,
};

const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);



// Primitive types
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2); // shallow copy - 오브젝트 내부의 오브젝트는 카피 안됨
jessicaCopy.lastName = 'Davis';

console.log(jessica2);
console.log(jessicaCopy);
*/
