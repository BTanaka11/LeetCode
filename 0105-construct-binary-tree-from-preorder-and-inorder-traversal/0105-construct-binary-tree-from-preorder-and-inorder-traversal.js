/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 1) {
        return {
            val: preorder[0],
            left: null,
            right: null
        }
    }
    if (preorder.length === 0) {
        return null;
    }
    let j = inorder.indexOf(preorder[0]);
    return {
        val: preorder[0],
        left: buildTree(preorder.slice(1, j + 1), inorder.slice(0, j)),
        right: buildTree(preorder.slice(j + 1), inorder.slice(j + 1))
    }
};