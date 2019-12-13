/**
 * @param {number} x
 * @return {number}
 */

let x = -2147483648;

var reverse = function(x) {

    let number  =  parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
    console.log(number);
    if (number  > 2147483648 || number < -2147483648) {
        return 0;
    }
    else{
        return (number);
    }
};


console.log(reverse(x));