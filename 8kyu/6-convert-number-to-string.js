/**
 * Title: Convert a Number to a String!
 * Link: https://www.codewars.com/kata/5265326f5fda8eb1160004c8
 * Difficulty: 8 kyu
 * 
 * Description:
 * We need a function that can transform a number (integer) into a string.
 *
 * Examples (input --> output):
 * 123 --> "123"
 * 999 --> "999"
 * -100 --> "-100"
 */

const convertNumber = (num) => {
    return String(num)
}

const number = 123;
console.log(convertNumber(number));