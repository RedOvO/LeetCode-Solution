/*
 * @Author: Naluhodo
 * @Date: 2022-03-01 13:44:56
 * @LastEditTime: 2022-03-01 14:08:05
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/maximum-subarray/
 */

/**
 * 解析：动态规划
 * 将问题分解为，求解以某个节点结束的各个子序列的最大子序列和，最终结果则为各个和的最大值。
 * 记当前节点为a[i]，以该节点结束的最大子序列和为sum[i]
 * 则 sum[i] = max(sum[i - 1] + a[i], a[i])
 * 最终结果 res = max(sum[1], ..., sum[len - 1])
 */
function maxSubArray(nums: number[]): number {
  let pre: number = nums[0];
  let max: number = nums[0];
  for (let i: number = 1; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    max = Math.max(pre, max);
  }
  return max;
};