const numbers = [12, 4, 5, 2, 57, 42, 22, 27];
const bigNum = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(n => n % 2 === 0);
// console.log(even);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 85000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 25000 },

];

const prices = products.filter(p => p.price > 34000);
console.log(prices);