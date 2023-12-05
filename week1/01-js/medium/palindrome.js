/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isCharacter(char) {
  return /^[a-zA-Z]$/.test(char);
}

function isPalindrome(str) {

  str = str.toLowerCase();

  let st = 0, end = str.length - 1;

  while (st < end) {
    if (!isCharacter(str[st])) {
      st++;
      continue;
    }
    if (!isCharacter(str[end])) {
      end--;
      continue;
    }
    if (str[st] !== str[end]) {
      return false;
    }
    st++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
