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
var detectCycle = function(head) {
    
    if (!head) {
        return null
    }
    let tortoise = head;
    let haire = head.next;
    
    while (tortoise != haire && haire && haire.next) {
        tortoise = tortoise.next;
        haire = haire.next.next;
    }
    
    if (tortoise === haire) {
        tortoise = head;
        haire = haire.next;
        while (tortoise != haire) {
            tortoise = tortoise.next;
            haire = haire.next;
        }
        return tortoise;
    } else {
        return null;
    }
};