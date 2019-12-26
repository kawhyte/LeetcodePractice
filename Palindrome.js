// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// var isPalindrome = function(x) {
//   let converted = x
//     .toString()
//     .split("")
//     .reverse()
//     .join("");
//   console.log(converted);
//   if (x === parseInt(converted)) {
//     return true;
//   } 

//   return false;
// };


var isPalindrome = function(x) {
   let reversedNum  =[];
   let converted = x
     .toString()
     .split("");
     
for (i=0; i < converted.length; i++){
   reversedNum.push(converted[i])
   console.log(reversedNum);
}
 console.log(reversedNum.join(''));
 console.log(x);
   if (x === parseInt(reversedNum.join(''))) {
      console.log("TRUE");
     return true;
   } 
   console.log("False");
return false;
}

 

isPalindrome(121);
