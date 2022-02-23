/*
 * @Author: Naluhodo
 * @Date: 2022-02-23 18:38:10
 * @LastEditTime: 2022-02-23 18:46:18
 * @LastEditors: Naluhodo
 * @Description: MergeSortedArray
 * @url: https://leetcode-cn.com/problems/merge-sorted-array/
 */

/**
 * 解析：本题共有三种解法
 * 1. 数据直接合并后排序 
 *    时间复杂度 O((m + n)log(m + n))
 *    空间复杂度 O(1)
 * 
 * 2. 新建一个nums1_copy，从前往后开始遍历nums1与nums2，小的放入nums1
 *    时间复杂度 O(m + n)
 *    空间复杂度 O(m + n)
 * 
 * 3. 充分利用nums1的特点，从nums1第m个位置，nums2第n个位置开始，从后往前分别进行遍历，取大的从m + n位置开始，从后往前填入nums1
 *    时间复杂度 O(m + n)
 *    空间复杂度 O(1)
 * 
 * 以下解法为方法3
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i: number = m - 1;
  let j: number = n - 1;
  let cur: number = m + n - 1;
  while (cur >= 0) {
    if (i < 0) {
      nums1[cur] = nums2[j];
      j--;
    } else if (j < 0) {
      nums1[cur] = nums1[i];
      i--;
    } else {
      if (nums1[i] >= nums2[j]) {
        nums1[cur] = nums1[i];
        i--;
      } else {
        nums1[cur] = nums2[j];
        j--;
      }
    }
    cur--;
  }
};