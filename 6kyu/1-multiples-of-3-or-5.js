/**
 * Title: Multiples of 3 or 5
 * Link: https://www.codewars.com/kata/514b92a657cdc65150000006
 * Difficulty: 6 kyu
 * 
 * Description:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 * Additionally, if the number is negative, return 0.
 * Note: If a number is a multiple of both 3 and 5, only count it once.
 */

const sumMultiples = (num) => {
    if (typeof num !== 'number' || num < 0 ) return 0
    let newNum = []
    for (let i = 1; i < num ; i++) {
        newNum.push(i)
    }
    const newArr = newNum.filter((num) => {
        return num % 3 === 0 || num % 5 === 0
    }).reduce((acc,curr) => acc + curr, 0)
    return newArr;
}
const number = 10
console.log(sumMultiples(number));

//! Simplified solution
const sumMultiplesV2 = (num) => {
    let newValue = 0;
    for (let i = 1; i < num ; i++) {
        if(i % 3 === 0 || i % 5 === 0) newValue += i
    }
    return newValue;
}
console.log(sumMultiplesV2(number));
