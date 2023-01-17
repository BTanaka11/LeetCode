/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let helperHash = {}
    let count = 0;
    let currentNode = head;
    while (currentNode) {
        count ++;
        helperHash[count] = currentNode
        currentNode = currentNode.next
    }
    
    let numNodeToRemove = count - n + 1;
    if (numNodeToRemove === 1) {
        let newHead = head.next;
        head.next = null;
        return newHead;
    }
    
    let nodePriorToRemovedNode = helperHash[count - n]
    nodePriorToRemovedNode.next = nodePriorToRemovedNode.next.next;
    helperHash[count - n + 1].next = null;
    return head;
};