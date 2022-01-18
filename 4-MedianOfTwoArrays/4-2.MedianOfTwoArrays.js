/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var nums1 = [];
var nums2 = [4];
 
/* O(m + n) */
var findMedianSortedArrays = function(nums1, nums2) {
  var nums = new Array();
  var i = 0;
  var j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      nums.push(nums1[i]);
      i++;
    }
    else {
      nums.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    nums.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    nums.push(nums2[j]);
    j++;
  }
  if (nums.length % 2 == 1)
    return nums[Math.floor(nums.length / 2)];
  else
    return (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
 };
 
 
 var median = findMedianSortedArrays(nums1, nums2);
 console.log(median);