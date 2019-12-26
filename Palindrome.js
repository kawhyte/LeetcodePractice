// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function(x) {
  let converted = x
    .toString()
    .split("")
    .reverse()
    .join("");
  console.log(converted);
  if (x === parseInt(converted)) {
    return true;
  } 

  return false;
};

isPalindrome(121);
