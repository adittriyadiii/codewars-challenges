/**
 * Title: Sum of positive
 * Link: https://www.codewars.com/kata/5715eaedb436cf5606000381
 * Difficulty: 8 kyu
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