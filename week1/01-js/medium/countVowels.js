/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

  str = str.toLowerCase();
  let count = 0;
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] == 'a' || str[idx] == 'e' || str[idx] == 'i' || str[idx] == 'o' || str[idx] == 'u')
      count++;
  }
  return count;
}

module.exports = countVowels;