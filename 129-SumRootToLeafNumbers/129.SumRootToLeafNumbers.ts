/*
 * @Author: Naluhodo
 * @Date: 2022-03-02 11:48:51
 * @LastEditTime: 2022-03-02 11:57:56
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 */

/**
 * 解析：深度优先搜索(dfs)
 * 典型的深搜题，需要注意的几个点
 * a. 无左右子节点的节点为叶节点，从根节点到叶节点的路径有效，计入到最终和中
 * b. 仅有一个子节点的节点，从根节点到该节点的路径无效，不计入最终和
 * c. 其余节点正常深搜遍历
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function sumNumbers(root: TreeNode | null): number {
  return dfs(0, root);
};

function dfs(base: number, node: TreeNode | null): number {
  if (node === null) {
    // 仅有一个子节点的节点，无效路径
    return 0;
  }
  const newBase: number = base * 10 + node.val;
  if (node.left === null && node.right == null) {
    // 叶节点，有效路径
    return newBase;
  } else {
    // 非叶节点
    return dfs(newBase, node.left) + dfs(newBase, node.right);
  }
}