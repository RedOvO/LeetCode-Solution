/*
 * @Author: Naluhodo
 * @Date: 2022-03-15 20:22:34
 * @LastEditTime: 2022-03-15 20:47:52
 * @LastEditors: Naluhodo
 * @Description: https://leetcode-cn.com/problems/reverse-linked-list/
 */

/**
 * 解析：迭代
 * 记录当前节点next的链表，记为nextList
 * 当前节点next变为新的逆序链表，形成新的逆序链表
 * nextList进入下一个迭代循环
 * 
 * 也可以有其他迭代思路，需要注意赋值时引用类型存在的浅拷贝即可
 */

function reverseList(head: ListNode | null): ListNode | null {
  let dummy: ListNode = null;
  let tmpList: ListNode = head;
  let nextList: ListNode = null;
  while (tmpList != null) {
    nextList = tmpList.next;
    tmpList.next = dummy;
    dummy = tmpList;
    tmpList = nextList;
  }
  return dummy;
};