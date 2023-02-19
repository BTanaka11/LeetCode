/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    //plan = DFS. first step = for everything currently in qeue except last item, set its next. then enqueue children.
    
    let qeue = [];
    let node = root;
    while (node) {
        
        if (node.left) {
            node.left.next = node.right;
            if (qeue.length > 0) {
                qeue[qeue.length - 1].next = node.left;
            }
            qeue.push(node.left, node.right);
        }
        node = qeue.shift();
    }
    node = root;
    while (node) {
        node.next = null;
        node = node.right;
    }
    return root
};