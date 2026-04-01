/**
 * Title: Convert boolean values to strings 'Yes' or 'No'.
 * Link: https://www.codewars.com/kata/53369039d7ab3ac506000467
 * Difficulty: 8 kyu
 * 
 * Description:
 * Complete the method that takes a boolean value and return a "Yes" string
 * for true, or a "No" string for false.
 */

const convertBoolean = (boolean) => {
    return boolean ? `Yes` : `No`
}

const value = true;
console.log(convertBoolean(value));