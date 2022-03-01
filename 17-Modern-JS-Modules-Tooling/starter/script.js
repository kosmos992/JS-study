// // Importing module
// // import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// // addToCart('bread', 5);
// // console.log(price, qt);

// console.log('Importing module');

// // import * as shoppingCart from './shoppingCart.js';

// // shoppingCart.addToCart('bread', 5);
// // console.log(shoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
add('key', 23);
add('key', 23);

add('key', 23);

console.log(cart);

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const statedc = cloneDeep(state);
console.log(statedc);
