/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代法
var reverseList = function (head) {
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

// 递归法
var reverseList = function (head) {
  if (head == null || head.next == null) return head
  let last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}
