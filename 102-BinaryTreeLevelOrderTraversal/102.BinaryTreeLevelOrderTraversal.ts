/*
 * @Author: Naluhodo
 * @Date: 2022-03-04 19:44:50
 * @LastEditTime: 2022-03-04 19:49:45
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 */

/**
 * 解析：宽度优先搜索(bfs)
 * 利用广搜层序遍历二叉树，按层依次加入队出队，构成最终数组即可
 */

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const q: TreeNode[] = [root];
  const res: number[][] = [];
  while (q.length > 0) {
    let i = 0;
    let curNode = null;
    let curLength = q.length;
    const curLevel: number[] = [];
    for (i = 0; i < curLength; i++) {
      curNode = q.shift();
      curLevel.push(curNode.val);
      if (curNode.left) q.push(curNode.left);
      if (curNode.right) q.push(curNode.right);
    }
    res.push(curLevel);
  }
  return res;
};