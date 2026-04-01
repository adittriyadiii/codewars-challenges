/**
 * Title: Reversed Strings
 * Link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018
 * Difficulty: 8 kyu
 * 
 * Description:
 * Complete the solution so that it reverses the string passed into it.
 *
 * 'world' => 'dlrow'
 * 'word' => 'drow'
 */

//! With reverse method
const reverseMethod = (str) => {
    return str.split('').reverse().join('')
}
const str = "world";
console.log(reverseMethod(str));

//! Without reverse method
const reverse = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr = newStr + (str[(str.length - 1) - i])
    }
    return newStr;
}
const strNew = "world";
console.log(reverse(strNew));