/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let newHead = {};
    let changingNewNode = newHead;
    let currentNode = head;

    while (currentNode && currentNode.next) {
        let tempNode = currentNode.next.next;
        currentNode.next.next = currentNode;
        changingNewNode.next = currentNode.next;
        currentNode.next = tempNode
        changingNewNode = currentNode;
        currentNode = currentNode.next;
    }
    return newHead.next || head;
};