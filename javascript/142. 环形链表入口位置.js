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

// 快慢指针
 var detectCycle = function(head) {
    if (!head || !head.next) return null
    let slow = head.next, fast = head.next.next

    while (slow != fast && fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }

    if (slow != fast) return null
    
    slow = head 
    while (slow != fast) {
      slow =slow.next
      fast = fast.next
    }
    return fast
};