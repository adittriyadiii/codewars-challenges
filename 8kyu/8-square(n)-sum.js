/**
 * Title: Square(n) Sum
 * Link: https://www.codewars.com/kata/515e271a311df0350d00000f
 * Difficulty: 8 kyu
 * 
 * Description:
 * Complete the square sum function so that it squares each number passed
 * into it and then sums the results together.
 *
 * For example, for [1, 2, 2] it should return 9 because
 * 1^2 + 2^2 + 2^2 = 9.
 */

const squareSum = (arr) =>{
    const newArr = arr.
    map(num => num ** 2).
    reduce((acc, curr) => acc + curr, 0)
    return newArr
}

const arr = [1,2,3]
console.log(squareSum(arr));

//!Simplify
const squareSumV2 = (arr) =>{
    return arr.reduce((acc, curr) => acc + (curr ** 2),0)
}

const arrV2 = [1,2,3]
console.log(squareSumV2(arr));