'use strict';

const code = str => str.slice(0, 3).toUpperCase();

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '❤' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${code(from)} to ${code(to)} (${time.replace(':', 'h')})`.padStart(
    46
  );
  console.log(output);
}
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [a, b] = row.trim().toLowerCase().split('_');
    const output = `${a}${b[0].toUpperCase()}${b.slice(1)}`;

    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
  // const news = [];
  // for (const row of rows) {
  //   const x = row.trim().toLowerCase();
  //   let upper = x.indexOf('_');
  //   let xx = x.replace('_', '');
  //   news.push(
  //     (
  //       xx.slice(0, upper) +
  //       xx[upper].toUpperCase() +
  //       xx.slice(upper + 1)
  //     ).padEnd(20, ' ')
  //   );
  // }
  // for (let i = 0; i < news.length; i++) {
  //   for (let j = 0; j <= i; j++) {
  //     news[i] += '✅';
  //   }
  //   console.log(news[i]);
});

underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

const check = function (seat) {};
check('11B');
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// const events = [];
// for (const [key, value] of gameEvents) {
//   if (events.includes(value)) continue;
//   else events.push(value);
// }

const events = [...new Set(gameEvents.values())];

gameEvents.delete(64);

console.log(
  `An event happend on average every ${90 / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents) {
  console.log(
    key <= 45
      ? `[FIRST HALF] ${key}: ${value}`
      : `[SECOND HALF] ${key}: ${value}`
  );
}


const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const qu = new Map([
  ['qu', 'what is the best language?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'js'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'tryagain'],
]);

console.log(qu);
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(qu.get('qu'));
for (const [key, value] of qu) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
// const answer = Number(prompt('your answer?'));
// console.log(qu.get(answer === qu.get('correct')));

console.log([...qu]);
*/
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal'); // returns updated map
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

rest.delete(2);
console.log(rest.size);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'test');

rest.set(document.querySelector('h1'), 'heading');

console.log(rest);

console.log(rest.get(arr));


const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet);
console.log(new Set('Yechan'));
console.log(ordersSet.size); // not length
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Bread');
ordersSet.add('Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let sum = 0;
1 * 2;
for (const y of odds) sum += y;
console.log(sum / odds.length);

// const odd = Object.keys(game.odds);
// for (const x of odd)
//   console.log(
//     `Odd of ${x === 'x' ? 'draw:' : 'victory ' + game[x] + ':'} ${
//       game.odds[x]
//     } `
//   );
for (const [team, odd] of Object.entries(game.odds)) console.log(team, odd);

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Countinho', 'Perisic'];

// // const { team1, draw = game.odds.x, team2 } = game.odds;

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
//   for (let i = 0; i < players.length; i++) console.log(players[i]);
// };

// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
*/

/*
const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your nice pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close} `);
}


// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours && restaurant.openingHours.mon) cl~
console.log(restaurant.openingHours?.mon?.open);
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`'On ${day}, we open at ${open}`);
}
console.log(restaurant?.order?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'sdf@naver.com' }];

console.log(users[0]?.name ?? 'User array empty');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


*/
/*

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section


const rest1 = {
  names: 'Capri',
  numGuests: 20,
};

const rest2 = {
  names: 'Capri',
  Owner: 'Koo',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);



restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---AND---');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log(7 && 0);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// 변수는 rest, 값은 spread

// Destructing

// Rest, because on left
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [p, , r, ...otherFood] = [...restaurant.mainMenu, restaurant.starterMenu];
console.log(p, r, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(3, 4, 5, 2, 4);
add(3, 4, 5, 2, 3, 42, 34);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

// 펑션에 변수를 여러 개 전달할 때나 새로운 배열을 만들 때만 쓰임
console.log(...newArr);

const newMenu = [restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Yechan';
const letters = [...str, ' ', 'Koo'];
console.log(letters);
console.log(...str);

// Real world example
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Let's make pasta! Ingredient 2?`),
//   prompt(`Let's make pasta! Ingredient 3?`),
// ];

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'KOO' };
console.log(newRestaurant);

// Copy
const restaurnatCopy = { ...restaurant };
restaurnatCopy.names = '한식당';
console.log(restaurant.names);
console.log(restaurnatCopy.names);

restaurant.orderDelivery({
  time: '20:30',
  address: 'Seoul',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Busan',
  starterIndex: 1,
});

const { names, openingHours, categories } = restaurant;
console.log(names, openingHours, categories);

const {
  names: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, categories);

// Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// 소괄호없이 중괄호만 있으면 코드블록으로 인식해서 오류발생
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , second] = restaurant.categories;
console.log(main, second);

// Switching variables
// const temp = main;
// main = second;
// second = temp;

[main, second] = [second, main];
console.log(main, second);

// Receive 2 return values from a function
const [starter, mainC] = restaurant.order(2, 0);
console.log(starter, mainC);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
