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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {

    if (!root) {
        return null;
    }
    
    if (root.left === null && root.right === null) {
        return root;
    }
    
    let leftTail = flatten(root.left);
    let rightTail = flatten(root.right);
    
    if (leftTail && rightTail) {
        leftTail.right = root.right;
        root.right = root.left;
        root.left = null;
        return rightTail;
    } else if (leftTail && !rightTail) {
        root.right = root.left;
        root.left = null;
        return leftTail;
    } else if (!leftTail && rightTail) {
        return rightTail;
    }
    
};