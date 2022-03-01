'use strict';

/*
const bookings = [];

const book = function (fNum, pNum = 1, price = 99 * pNum) {
  // pNum = pNum || 1;
  // price = price || 1;

  const booking = {
    fNum, // fNum : fNum
    pNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

book('LH123');
book('LH123', 2, 800);
book('LH123', 5);
book('LH123', 3);
book('LH123', undefined, 900);


const flight = 'LH123';
const lei = {
  name: 'Lei Koo',
  passport: 201700368,
};

const checkIn = function (flightN, passenger) {
  flightN = 'LH999';
  passenger.name = 'MR. ' + passenger.name;

  if (passenger.passport === 201700368) {
    alert('Check in');
  } else {
    alert('Wrong');
  }
};
checkIn(flight, lei);
console.log(flight);
console.log(lei);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(lei);
checkIn(flight, lei);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// upperFirstWord, oneWord === callback function
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);


// const greet = function (greeting) {
//   return function (names) {
//     console.log(`${greeting} ${names}`);
//   };
// };

const greet = greeting => names => console.log(`${greeting} ${names}`);

const greeter = greet('hey');
greeter('jonas');
greeter('steve');

greet('hello')('koo');

/////////////////////////////

const lufthansa = {
  airline: 'Lufthansa',
  bookings: [],
  iataCode: 'LH',
  book(flightN, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightN}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightN}`, name });
  },
};

lufthansa.book(239, 'Yechan');
lufthansa.book(635, 'Michael');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  bookings: [],
  iataCode: 'EW',
};

const book = lufthansa.book;

// book(23, 'Sarah');
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  bookings: [],
  iataCode: 'LX',
};

book.call(swiss, 123, 'Jones');
console.log(swiss);

// Apply
const flightData = [583, 'George'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

// Bind
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(232, 'William');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas');
bookEW23('Marth');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
////////////////////////////////

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    type === 'string'
      ? console.log(`Poll results are ${this.answers.join(', ')}`)
      : console.log(this.answers);
  },
};

document.body
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 2, 3, 4, 5] }, 'string');
poll.displayResults.call({ answers: [1, 2, 3, 4, 5] });

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also naver run again'))();


const secureBooking = function () {
  let pc = 0;

  return function () {
    pc++;
    console.log(`${pc} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
/////////////////////////////
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);

const boardp = function (n, wait) {
  const perg = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perg} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perg = 1000;

boardp(180, 3);
////////////////////////////
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
