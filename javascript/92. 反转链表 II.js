/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let successor = null
  // reverseN函数的作用是前n个链表翻转
  function reverseN(head, n) {
    if (n === 1) {
      successor = head.next
      return head
    }
    let last = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = successor
    return last
  }
  if (m === 1) {
    return reverseN(head, n)
  }
  head.next = reverseBetween(head.next,m-1,n-1)
  return head
}
