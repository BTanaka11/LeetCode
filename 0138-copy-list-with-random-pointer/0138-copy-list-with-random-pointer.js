/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let currOriginal = head;
    let copyHead = null;
    let helperArray = [];
    let i = 0
    var copyNode;
    while (currOriginal) {
        if (!copyHead) {
            copyNode = {val: currOriginal.val, next: null}
            copyHead = copyNode
        } else {
            let newNode = {val: currOriginal.val, next: null};
            copyNode.next = newNode;
            copyNode = newNode;
        }
        currOriginal.index = i;
        i ++
        helperArray.push(copyNode);
        currOriginal = currOriginal.next;
    }
    
    currOriginal = head;
    
    while (currOriginal) {
        helperArray[currOriginal.index].random = currOriginal.random === null ? null : helperArray[currOriginal.random.index];
        currOriginal = currOriginal.next;
    }
    return copyHead;
    
};