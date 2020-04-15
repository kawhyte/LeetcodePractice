//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

var romanToInt = function(s) {
  let numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  s.toString().split("");
// console.log(numbers.C);
let total= 0;
let prev = 0
 for (let i = 0; i < s.length; i++) {
     let currentValue  = numbers[s[i]];

     if (currentValue <= prev) {
        total += currentValue;
        console.log("this is  not * " + total)
     } else{
        total+= currentValue - 2 * prev;
        console.log(" this is * " + total)
     }
     prev = currentValue;
 }
 return total;
};

romanToInt("MCMXCIV");
