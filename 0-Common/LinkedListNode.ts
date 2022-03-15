/*
 * @Author: Naluhodo
 * @Date: 2022-03-15 20:20:04
 * @LastEditTime: 2022-03-15 20:21:14
 * @LastEditors: Naluhodo
 * @Description: 
 */

/*
 * Definition for a linked list node.
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}