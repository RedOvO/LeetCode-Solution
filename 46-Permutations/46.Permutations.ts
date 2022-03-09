/*
 * @Author: Naluhodo
 * @Date: 2022-03-09 18:34:55
 * @LastEditTime: 2022-03-09 18:45:28
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/permutations/
 */

/**
 * 解析：回溯(深搜)
 *   1      2      3
 *  2 3    1 3    1 2
 * 3   2  3   1  2   1
 * 新加入当前排列的数字不可与已在数组内数字重复
 * 当前排列长度与基本数组长度一致时剪枝
 * 需要注意每次回溯方法的入参数组都需要深拷贝出一个新的数组
 * 该写法也可以继续优化，出于内存考虑，可以回溯方法的入参共用同一个数组，不过要注意回溯后的数组处理
 * 另外，也可以通过入参传入一个map用作缓存，降低因includes方法遍历带来的损耗
 */

function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const backtrace = (branch: number[]) => {
    if (branch.length === nums.length) res.push(branch);
    nums.forEach(num => {
      if (!branch.includes(num)) {
        backtrace([...branch, num])
      }
    })
  }
  backtrace([]);
  return res;
};