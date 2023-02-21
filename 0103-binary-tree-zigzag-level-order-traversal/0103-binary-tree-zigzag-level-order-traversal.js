/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    /* 
    mode begins in push() mode and indicator begins
    as root.
    after adding to qeue, check
    if node===indicator. if so, switch
    from setting node to qeue.pop() to
    qeue.shift() and from adding to qeue via
    unshift(node.right) + unshift(node.left) to
    adding via push(node.left) + push(node.right).
    set indicator to qeue[qeue.length-1] if 
    switching to push() mode. set indicator to
    qeue[0] if switching to unshift() mode. 
    UNSHIFT MODE = newNode = pop()
    PUSH MODE = newNode = shift() 
    */
    
    if (!root) {
        return [];
    }
    let pushMode = true;
    let indicator = root;
    let node = root;
    let qeue = [];
    let results = [[]];
    while (node) {
        results[results.length-1].push(node.val);
        if (pushMode) {
            if (node.left) {
                qeue.push(node.left);
            }
            if (node.right) {
                qeue.push(node.right);
            }
        } else {
            if (node.right) {
                qeue.unshift(node.right);
            }
            if (node.left) {
                qeue.unshift(node.left);
            }
        }
        if (node === indicator) {
            results.push([]);
            pushMode = !pushMode;
            if (pushMode) {
                indicator = qeue[qeue.length-1];
            } else {
                indicator = qeue[0];
            }
        }
        if (pushMode) {
            node = qeue.shift();
        } else {
            node = qeue.pop();
        }
    }
    results.pop();
    return results;
};