/**
 * Title: Vowel Count
 * Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3
 * Difficulty: 7 kyu
 * 
 * Description:
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this kata (but not y).
 * The input string will only consist of lower case letters and/or spaces.
 */

const vowelCount = (str) => {
    if (typeof str !== 'string') return `Input must be string!`; 
    const strSplit = str.toLowerCase()
    const vowelStr = ['a','i','u','e','o']
    let sum = 0;
    for (let i = 0; i < strSplit.length; i++) {
       if(vowelStr.includes(strSplit[i])) sum++
    }
    return sum;
}

const str = 'Hello World'
console.log(vowelCount(str));