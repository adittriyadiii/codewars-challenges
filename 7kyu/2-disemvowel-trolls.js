/**
 * Title: Disemvowel Trolls
 * Link: https://www.codewars.com/kata/52fba66badcd10859f00097e
 * Difficulty: 7 kyu
 * 
 * Description:
 */

const removeVowel = (str) => {
    const vowelStr = ['a','i','u','e','o'];
    const newStr = str.split('').filter(value =>{
        return !vowelStr.includes(value.toLowerCase());
    })
    return newStr.join('');
}

const str = "This website its for winner not for losser YEAH"
console.log(removeVowel(str));