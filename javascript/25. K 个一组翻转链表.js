/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  function reverseList(a, b) {
    // [a,b) 左闭右开
    let pre = null
    let cur = a
    let nextTmp
    while (cur != b) {
      nextTmp = cur.next
      cur.next = pre
      pre = cur
      cur = nextTmp
    }
    return pre
  }
  let a = head,
    b = head
  for (let i = 0; i < k; i++) {
    if (b == null) return head
    b = b.next
  }
  let newHead = reverseList(a, b)
  a.next = reverseKGroup(b,k)
  return newHead
}
