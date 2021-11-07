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
// 迭代法 比较容易理解 空间复杂度O1
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

// 递归法 比较难理解 空间复杂度On
var reverseList = function (head) {
  if (head == null || head.next == null) return head
  let newHead = reverseList(head.next)
  head.next.next = head
  head.next = null // 需要注意的是的下一个节点必须指向 varnothing。如果忽略了这一点，链表中可能会产生环。
  return newHead
}
