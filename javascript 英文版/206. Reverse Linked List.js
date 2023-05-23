/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null,
    cur = head,
    nextTemp
    while (cur != null) {
        nextTemp = cur.next
        cur.next = pre
        pre = cur
        cur = nextTemp
        
    }
    return pre
    
};