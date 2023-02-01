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

//     if (!root) {
//         return null;
//     }
    
//     if (root.left === null && root.right === null) {
//         return root;
//     }
    
//     let leftTail = root.left ? flatten(root.left) : null;
//     let rightTail = root.right ? flatten(root.right) : null;
    
//     if (leftTail && rightTail) {
//         leftTail.right = root.right;
//         root.right = root.left;
//         root.left = null;
//         return rightTail;
//     } else if (leftTail && !rightTail) {
//         root.right = root.left;
//         root.left = null;
//         return leftTail;
//     } else if (!leftTail && rightTail) {
//         return rightTail;
//     }
    if (root === null) return;
    if (root.left) {
		// step 1
        var last = root.left;
        while (last.right !== null) last = last.right;
        // step 2
        var tmp = root.right;
		// step 3
        root.right = root.left;
		// step 4
        last.right = tmp;
		// step 5
        root.left = null;
    }
    
    flatten(root.right);
};