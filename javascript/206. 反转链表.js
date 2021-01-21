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
var reverseList = function(head) {
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
};