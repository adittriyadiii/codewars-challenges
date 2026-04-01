/**
 * Title: Sum of positive
 * Link: https://www.codewars.com/kata/5715eaedb436cf5606000381
 * Difficulty: 8 kyu
 * 
 * Description:
 * You get an array of numbers, return the sum of all of the positives ones.
 *
 * Example:
 * [1, -4, 7, 12] => 1 + 7 + 12 = 20
 *
 * Note:
 * If there is nothing to sum, the sum is default to 0.
 */

const sumPositive = (arr) => {
    if(!arr || arr.length === 0) return 0;
    let sum = 0;
    for (const value of arr) {
        if (value < 0 ) continue;
        sum += value 
    }
    return sum;
}

const arr = [1, -4, 7, 12];
console.log(sumPositive(arr));