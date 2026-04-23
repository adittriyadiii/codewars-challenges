/**
 * Title: String repeat
 * Link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
 * Difficulty: 8 kyu
 * 
 * Description:
 * Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
 *
 * Examples:
 * 6, "I"     -> "IIIIII"
 * 5, "Hello" -> "HelloHelloHelloHelloHello"
 */

const repeatString = (num,str) => {
    if (num < 0 ) return `Please input positive number`;
    let newString='';
    for (let i = 0; i < num; i++) {
        newString += str
    }
    return newString;
}

const number = 1
const string = "Hello"
console.log(repeatString(number,string));