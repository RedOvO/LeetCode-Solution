/*
1.Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [3, 3];
var target = 6;


var twoSum = function(nums, target) {
  var flag = false;
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        flag = true;
        break;
      }
    }
    if (flag)
      break;
  }
  return flag? [i, j] : [];
};

var a = twoSum(nums, target);
console.log(a);