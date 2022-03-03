/*
 * @Author: Naluhodo
 * @Date: 2022-03-03 18:38:10
 * @LastEditTime: 2022-03-03 18:44:04
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/add-strings/
 */

/**
 * 解析：
 * 正常思路，按竖式计算的对位与进位方法，双指针从后往前加算即可，需要注意一些边界细节。
 */

function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let sum, carry = 0;
  let res = '';
  while (i >= 0 || j >= 0) {
    sum = Number(num1[i] ? num1[i] : '0') + Number(num2[j] ? num2[j] : '0') + carry;
    carry = Math.floor(sum / 10);
    res = sum % 10 + '' + res;
    i--;
    j--;
  }
  return carry ? carry + res : res;
};