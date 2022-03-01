// Exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (p, q) {
  cart.push({ p, q });
  console.log(`${q} ${p} added to cart`);
};

const totalPrice = 237;
const totalQuant = 23;

export { totalPrice, totalQuant as qt };

export default function (p, q) {
  cart.push({ p, q });
  console.log(`${q} ${p} added to cart`);
}
