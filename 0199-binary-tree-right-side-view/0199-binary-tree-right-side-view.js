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
 * @return {number[]}
 */
var rightSideView = function(root) {

    let results = []
    let recursiveFunc = (node, level) => {
        if (!node) {
            return;
        }
        if (results.length <= level) {
            results.push(node.val)
        }
        recursiveFunc(node.right, level +1)
        recursiveFunc(node.left, level +1)
    }
    recursiveFunc(root, 0)
    return results;
};