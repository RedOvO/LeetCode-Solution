/*
2.Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  var carry = 0;
  var temp = 0;
  var head = new ListNode(0);
  var l = head;
  while (l1 != null || l2 != null) {
    temp = (((l1==null)?0:l1.val) + ((l2==null)?0:l2.val)+ carry)%10;
    carry = Math.floor((((l1==null)?0:l1.val) + ((l2==null)?0:l2.val) + carry)/10);
    l.next = new ListNode(temp);
    l = l.next;
    if(l1!=null)
      l1=l1.next;
    if(l2!=null)
      l2=l2.next;
  }
  if(carry == 1){
    l.next = new ListNode(carry);
  }
  
  return head.next;
};