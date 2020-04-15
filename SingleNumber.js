// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [4, 1, 2, 1, 2];

var singleNumber = function (nums) {
  let count = {};

  nums.forEach((element) => {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  });

  for (const key in count) {
    if (count.hasOwnProperty(key)) {
      if (count[key] === 1) {
        return key;
      }
    }
  }
};

console.log(singleNumber(nums));
