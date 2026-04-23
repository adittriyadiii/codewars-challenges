/**
 * Title: Find the smallest integer in the array
 * Link: https://www.codewars.com/kata/55a2d7ebe362935a210000b2
 * Difficulty: 8 kyu
 *
 * Description:
 * Given an array of integers your solution should find the smallest integer.
 *
 * Examples:
 * Given [34, 15, 88, 2] your solution will return 2
 * Given [34, -345, -1, 100] your solution will return -345
 * You can assume, for the purpose of this kata, that the supplied array will not be empty.
 */

const smallestInteger = (arr) => {
  if (!arr || arr.length === 0) return `Please input array with minimal 1 element`
  const smallnum = arr.reduce((acc, curr) => {
    if (acc < curr) {
      return acc;
    } else {
      return curr;
    }}, arr[0]);
  return smallnum;
};
const arr = [9,2,3,5,3];
console.log(smallestInteger(arr));