/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 哈希表法
var hasCycle = function(head) {
    let map = new Map()
    while (head != null) {
      if (map.has(head)) {
        return true
      } else {
        map.set(head, true)
      }
      head = head.next
    }
    return false
};

// 快慢指针法
var hasCycle = function(head) {
    if (head == null || head.next == null) return false
    let slow = head,fast = head.next
    while (slow !== fast) {
      if (fast == null|| fast.next == null) return false
      slow = slow.next
      fast = fast.next.next
    }
    return true
};