/*
 * @Author: Naluhodo
 * @Date: 2022-03-05 19:23:36
 * @LastEditTime: 2022-03-05 19:33:34
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/pascals-triangle/
 */

/**
 * 杨辉三角
 *    1
 *   1 1
 *  1 2 1
 * 1 3 3 1
 * 
 * 解析：本题两种解法
 * 1. 按杨辉三角的构成正常思路求解
 *    记当前位置为 p[i][j] 用于表示第(i + 1)行，第(j+1)个数
 *    由杨辉三角构成原理，则有 p[i][j] = p[i - 1][j - 1] + p[i - 1][j - 1]
 *    若加数为 undefined, 则按 0 处理
 * 
 * 2. 通过错位相加的方式获取新一层的序列，本质上与方法1相同，更便于理解
 *    0 1 3 3 1
 *    1 3 3 1 0
 *    ---------
 *    1 4 6 4 1
 * 
 * 以下为解法2
 */

function generate(numRows: number): number[][] {
  const resRow: number[][] = [[1]];
  let curRow: number[] = [1];
  let downRow: number[] = [];
  for (let i = 1; i < numRows; i++) {
    downRow = [...curRow, 0];
    curRow = [0, ...curRow].map((_, index, upRow) => {
      return upRow[index] + downRow[index]
    })
    resRow.push(curRow);
  }
  return resRow;
};