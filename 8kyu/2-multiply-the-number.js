/**
 * Title: Multiply the number
 * Link: https://www.codewars.com/kata/5708f682c69b48047b000e07
 * Difficulty: 8 kyu
 * 
 * Description:
 * Jack really likes his number five: the trick here is that you have to
 * multiply each number by 5 raised to the number of digits of each number.
 *
 * 3 --> 15 (3 * 5^1)
 * 10 --> 250 (10 * 5^2)
 * 200 --> 25000 (200 * 5^3)
 * 0 --> 0 (0 * 5^1)
 * -3 --> -15 (-3 * 5^1)
 */

const multiply = (number) => {
    return number * (5 ** (String(Math.abs(number)).length));
}

console.log(multiply(-2));