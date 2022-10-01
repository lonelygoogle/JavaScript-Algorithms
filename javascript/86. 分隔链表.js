/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummy1 = new ListNode(-1)
        p1 = dummy1
        dummy2 = new ListNode(-1)
        p2 = dummy2
        p = head
    while (p !=null ) {
        if (p.val >= x) {
            
            p2.next = p
            p2 = p2.next
            
        } else {
            
            p1.next = p
            p1 = p1.next
            
        }
        // 解除原链表当前节点和下一个节点的链接
        let tmp = new ListNode(-1)
        tmp = p.next
        p.next = null
        p = tmp
    }
    p1.next = dummy2.next
    return dummy1.next
};