/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  function reverseList(head) {
    let pre = null
    let cur = head
    let nextTmp
    while (cur != null) {
      nextTmp = cur.next
      cur.next = pre
      pre = cur
      cur = nextTmp
    }
    return pre
  }
  if (!head || !head.next) return true
  let slow = head,
    fast = head,
    left = head
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  const firstHalfEnd =slow
  // if (fast!=null) {
  //   slow = slow.next
  // }
  const secondHalfStart = reverseList(slow.next)
  let right = secondHalfStart
  while (right != null) {
    if (left.val != right.val) return false
    left = left.next
    right = right.next
  }
  firstHalfEnd.next = reverseList(secondHalfStart)
  return true
}
