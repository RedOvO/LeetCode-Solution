/*
 * @Author: Naluhodo
 * @Date: 2022-03-14 19:39:38
 * @LastEditTime: 2022-03-14 20:35:33
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/path-sum/
 */

/**
 * 方法一：深搜
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const pathDfs = (node: TreeNode, pathSum: number, isLeaf): boolean => {
    if (node == null) return isLeaf && pathSum === targetSum;
    const isleafNode = !(node.left || node.right);
    return pathDfs(node.left, node.val + pathSum, isleafNode) || pathDfs(node.right, node.val + pathSum, isleafNode);
  }
  return pathDfs(root, 0, false);
};

/**
 * 方法二：宽搜
 */

function hasPathSum2(root: TreeNode | null, targetSum: number): boolean {
  if (root == null) return false;
  const q = [root];
  const val_q = [root.val];
  while (q.length > 0) {
    let l = q.length;
    let curNode = null;
    let curVal = 0;
    for (let i = 0; i < l; i++) {
      curNode = q.shift();
      curVal = val_q.shift();
      if (!(curNode.left || curNode.right)) {
        if (curVal === targetSum) return true;
        continue;
      }
      if (curNode.left) {
        q.push(curNode.left);
        val_q.push(curNode.left.val + curVal);
      }
      if (curNode.right) {
        q.push(curNode.right);
        val_q.push(curNode.right.val + curVal);
      }
    }
  }
  return false;
};