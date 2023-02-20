const numbers = [12, 4, 5, 15, 30, 2, 57, 42, 22, 27];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log(fivesAll);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 85000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 25000 },

];

const prices = products.find(p => p.price < 40000);
console.log(prices)

