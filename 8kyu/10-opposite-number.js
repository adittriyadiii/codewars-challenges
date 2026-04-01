/**
 * Title: Opposite number
 * Link: https://www.codewars.com/kata/56dec885c54a926dcd001095
 * Difficulty: 8 kyu
 * 
 * Description:
 * Very simple, given a number, find its opposite (additive inverse).
 *
 * Examples:
 * 1: -1
 * 14: -14
 * -34: 34
 */

const opposite = (num) => {
    return num < 0 ? Math.abs(num) : -num;
}

const number = 3;
console.log(opposite(number));