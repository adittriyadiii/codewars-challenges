/**
 * Title: Disemvowel Trolls
 * Link: https://www.codewars.com/kata/52fba66badcd10859f00097e
 * Difficulty: 7 kyu
 * 
 * Description:
 * Trolls are attacking your comment section!
 * A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
 * Your task is to write a function that takes a string and return a new string with all vowels removed.
 * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
 * Note: for this kata y isn't considered a vowel.
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