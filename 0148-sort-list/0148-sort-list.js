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
var sortList = function(head) {
    
    if (!head) {
        return null;
    }
    
    let length = 0;
    
    let node = head;
    while (node) {
        length ++;
        node = node.next
    };
    let supportArray = new Array(length).fill(null);
    node = head;
    length = 0;
    while (node) {
        supportArray[length] = node;
        node = node.next
        length ++;
    }
    
    supportArray = supportArray.sort((a, b) => {
        return a.val - b.val;
    })
    for (let i = 0; i < length - 1; i ++) {
        supportArray[i].next = supportArray[i + 1]
    }
    supportArray[length - 1].next = null;
    return supportArray[0];
    
};