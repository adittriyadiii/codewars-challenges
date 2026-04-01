/**
 * Title: Remove First and Last Character
 * Link: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
 * Difficulty: 8 kyu
 * 
 * Description:
 * Your goal is to write a function that removes the first and last
 * characters of a string. You're given one parameter, the original string.
 *
 * Important:
 * Your function should handle strings of any length >= 2 characters.
 * For strings with exactly 2 characters, return an empty string.
 *
 * Examples:
 * 'eloquent' --> 'loquen'
 * 'country' --> 'ountr'
 * 'person' --> 'erso'
 * 'ab' --> ''
 * 'xyz' --> 'y'
 */

const removeString = (str) => {
    return str.slice(1, -1)
}

const str = 'Hello World'
console.log(removeString(str));