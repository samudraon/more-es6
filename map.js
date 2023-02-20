const numbers = [2, 8, 4, 6, 3];
const output = [];

function getDoubles(numbers) {
  for (const number of numbers) {
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2);
const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);



/* 
Purpose: 
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the array
*/

const result = getDoubles(numbers);
// console.log(result);
console.log(makeDouble)