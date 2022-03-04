/*
 * @Author: Naluhodo
 * @Date: 2022-03-04 19:47:13
 * @LastEditTime: 2022-03-04 19:47:13
 * @LastEditors: Naluhodo
 * @Description: 
 */

/*
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}