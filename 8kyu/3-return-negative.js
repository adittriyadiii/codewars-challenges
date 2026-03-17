/**
 * Title: Multiply the number
 * Link: https://www.codewars.com/kata/55685cd7ad70877c23000102
 * Difficulty: 8 kyu
 */

const negativeNumber = (number) => number === 0 ? 0 : -Math.abs(number);

console.log(negativeNumber(3));