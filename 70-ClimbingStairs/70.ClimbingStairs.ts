/*
 * @Author: Naluhodo
 * @Date: 2022-03-16 20:38:55
 * @LastEditTime: 2022-03-16 20:44:32
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/climbing-stairs/submissions/
 */

/**
 * 解析：递归 + 缓存 (斐波那契数列)
 * 核心思路在于踏上最后的楼梯，只可能是走一步或者走两步，往前同理
 * 所以可以得到公式 f(n) = f(n - 1) + f(n - 2)
 * 因此可以通过递归调用
 * 而纯递归计算量较大，内存容易不足，故可以采用缓存的形式
 * 将已知的 [n, f(n)] 序列存入缓存中
 * f(n)优先获取缓存中的值
 */

const dataMap: Map<number, number> = new Map([
  [0, 1],
  [1, 1]
])
function climbStairs(n: number): number {
  if (dataMap.get(n)) {
    return dataMap.get(n);
  } else {
    const val = climbStairs(n - 1) + climbStairs(n - 2)
    dataMap.set(n, val);
    return val;
  }
};