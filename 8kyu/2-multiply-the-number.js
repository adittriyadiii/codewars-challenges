/**
 * Title: Multiply the number
 * Link: https://www.codewars.com/kata/5708f682c69b48047b000e07
 * Difficulty: 8 kyu
 */

const multiply = (number) => {
    return number * (5 ** (String(Math.abs(number)).length));
}

console.log(multiply(-2));