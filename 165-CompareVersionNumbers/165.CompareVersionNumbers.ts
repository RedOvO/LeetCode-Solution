/*
 * @Author: Naluhodo
 * @Date: 2022-03-03 18:33:28
 * @LastEditTime: 2022-03-03 18:35:15
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/compare-version-numbers/
 */

/**
 * 解析：
 * 三步解决
 * 1. 将两个版本号放入两个数组
 * 2. 扩充较短数组与较长数组一致
 * 3. 对位比较
 * 
 * TODO：可以考虑用正则解
 */

function compareVersion(version1: string, version2: string): number {
  let v1: number[] = version1.split('.').map(num => Number(num));
  let v2: number[] = version2.split('.').map(num => Number(num));
  const l1: number = v1.length;
  const l2: number = v2.length;
  l1 < l2
    ? v1 = [...v1, ...Array(l2 - l1).fill(0)]
    : v2 = [...v2, ...Array(l1 - l2).fill(0)]
  for (let idx in v1) {
    if (v1[idx] === v2[idx]) continue;
    return v1[idx] > v2[idx] ? 1 : -1;
  }
  return 0;
};