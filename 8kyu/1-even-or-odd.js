/**
 * Title: Even or Odd
 * Link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
 * Difficulty: 8 kyu
 */

const checkNumber = (number) => {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(checkNumber(2));
console.log(checkNumber(3));