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

/* O(log(m + n)) */
/*        left_part          |        right_part
    A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1] m=1   i=1
    B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1] n=0   j=1
*/
var findMedianSortedArrays = function(nums1, nums2){
  var m = nums1.length;
  var n = nums2.length;
  var A = nums1;
  var B = nums2;
  if (nums1.length > nums2.length) {
    B = nums1;
    A = nums2;
    m = nums2.length
    n = nums1.length;
  }

  var low = 0;
  var high = m;
  var i,j;
  var num1,num2;
  while (low <= high) {
    i = Math.floor((low + high) / 2);
    j = Math.floor((m + n + 1) / 2) - i;
    if (i > 0 && j < n && A[i - 1] > B[j])
      high = i - 1;
    else if (j > 0 && i < m && A[i] < B[j - 1])
      low = i + 1;
    else {
      if (i == 0)
        num1 = B[j - 1];
      else if (j == 0)
        num1 = A[i - 1];
      else
        num1 = Math.max(A[i - 1], B[j - 1]);
      break;
    }
  }
  if((m + n) % 2 == 1)
    return num1;
  if(i == m)
    num2 = B[j];
  else if(j == n)
    num2 = A[i];
  else
    num2 = Math.min(A[i], B[j]);
  return (num1 + num2) / 2;
}

var median = findMedianSortedArrays(nums1, nums2);
console.log(median);