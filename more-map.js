const numbers = [12, 41, 34, 57];
const half = numbers.map(n => n / 2);
const third = numbers.map(x => x / 3);
// console.log(half);
// console.log(third);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Hardy', 'Tom Solaiman'];
const firstLetter = friends.map(friend => friend[0]);
const nameLength = friends.map(friend => friend.length);
// console.log(firstLetter);
// console.log(nameLength);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 85000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 25000 },

];

const items = products.map(product => product.name);
// console.log(items);
const prices = products.map(p => p.price);
console.log(prices);