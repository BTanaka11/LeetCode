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
    //depth first search, starting right side. add nodes to skeleton array. then loop through array to reconnect left/right to turn into LL.
    
    let skeletonArray = [];
    
    let recursiveFunc = function(node) {
        if (!node) {
            return;
        }
        recursiveFunc(node.right);
        recursiveFunc(node.left);
        skeletonArray.push(node);
    }
    recursiveFunc(root);
    for (let i = skeletonArray.length - 1; i >= 0; i --) {
        skeletonArray[i].left = null;
        skeletonArray[i].right = skeletonArray[i - 1] || null;
    }
    return root;
};