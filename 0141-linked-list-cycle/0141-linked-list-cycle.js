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
var hasCycle = function(head) {
    if (!head) {
        return false;
    }
    
    let haire = head.next;
    let tortoise = head;
    while (haire && haire.next && haire.next.next) {
        if (haire === tortoise) {
            return true;
        }
        tortoise = tortoise.next;
        haire = haire.next.next
    }
    return false;
};