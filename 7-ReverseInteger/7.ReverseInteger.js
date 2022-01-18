/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within
the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem,
assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */

var x = 1534236469;

var reverse = function(x) {
  var s = x.toString();
  var res = Number.parseInt(s.split("").reverse().join(""));
  if (x >= 0) {
    if(res > (Math.pow(2, 31) - 1))
      return 0;
    else
      return res;
  }
  else {
    if (res > Math.pow(2, 31))
      return 0;
    else
      return -res;
  }
};

var y = reverse(x);
console.log(y);