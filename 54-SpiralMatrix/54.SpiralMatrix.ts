/*
 * @Author: Naluhodo
 * @Date: 2022-03-16 20:33:18
 * @LastEditTime: 2022-03-16 20:37:23
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/spiral-matrix/
 */

/**
 * 解析：
 * 设置上下左右四个边界
 * 按从左往右，从上到下，从右到左，从下到上的顺序遍历
 * 遍历完一圈后，四个边界向内缩进一圈
 * 上边界 > 下边界 或 左边界 > 右边界 时结束遍历
 * 注意若 左边界 = 右边界，则无需从右往左遍历；若上边界 = 下边界，则无需从下往上遍历
 */

function spiralOrder(matrix: number[][]): number[] {
  let left = 0;
  let right = (matrix[0]?.length || 0) - 1;
  let bottom = 0;
  let top = matrix.length - 1;
  let res: number[] = [];
  while (left <= right && bottom <= top) {
    // left -> right
    for (let row = left; row <= right; row++) {
      res.push(matrix[bottom][row]);
    }
    // top -> bottom
    for (let column = bottom + 1; column <= top; column++) {
      res.push(matrix[column][right]);
    }
    // right -> left
    for (let row = right - 1; row >= left && top > bottom; row--) {
      res.push(matrix[top][row]);
    }
    // bottom -> top
    for (let column = top - 1; column >= bottom + 1 && right > left; column--) {
      res.push(matrix[column][left]);
    }
    left++;
    right--;
    bottom++;
    top--;
  }
  return res;
};