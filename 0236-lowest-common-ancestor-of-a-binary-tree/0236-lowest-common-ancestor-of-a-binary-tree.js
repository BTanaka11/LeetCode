/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    let pStack = null
    let qStack = null
    let stack = []
    let DFS = (node) => {
        if (node === null) {
            return;
        }
        if (pStack && qStack) {
            return;
        }
        stack.push(node);
        if (node === p) {
            pStack = stack.slice();
        }
        if (node === q) {
            qStack = stack.slice();
        }
        DFS(node.left);
        DFS(node.right);
        stack.pop();
    }
    DFS(root);
    let pStackIndex = pStack.length - 1;
    let qStackIndex = qStack.length - 1;
    while (pStack[pStackIndex] != qStack[qStackIndex]) {
        if (qStackIndex > pStackIndex) {
            qStackIndex --;
        } else {
            pStackIndex --;
        }
    }
    
    return pStack[pStackIndex];
    
//     let countFound 0 ;
//     let recursive = (node) => {
        
//         if (node === null) {
//             return;
//         }
        
        
        
//         if (node === p || node ===q) {
//             countFound ++;
//             if (countFound === 2) {
//                 return true;
//             }
//         }
//         let leftResults = recursive(node.left);
//         if (countFound === 2) {
//             return (node === p || node === q) ? leftResults : node
//         }
//         let rightResults = recursive(node.right);
//         if (countFound === 2) {
//             return (rightResults === p || rightResults === q) ? rightResults : node
//         }
        
//     }
    
//     return recursive(root)
    
    //plan= skeleton array by BFS. as its build, store and mark index of P and Q, and stop BFS if both are found.
    // then start with the latestIndexed node of P and Q within array and re-calculate it to its parent via math.floor((index-1)/2),
    // when both re-calculated nodes are the same, return that node.
    
//     let skeleton = [];
//     let qeue = [];
//     let node = root;
    
//     let pIndex = null;
//     let qIndex = null;
//     while (pIndex === null || qIndex === null) {
//         if (node != null) {
//             skeleton.push(node);
//             if (node === p) {
//                 pIndex = skeleton.length - 1;
//             }
//             if (node === q) {
//                 qIndex = skeleton.length - 1;
//             }
//         } else {
//             skeleton.push(null);
//         }
//         if (node === null) {
//             qeue.push(null, null)
//         } else {
//             qeue.push(node.left, node.right)
//         }
//         node = qeue.shift();
//     }
    
//     while (pIndex != qIndex) {
//         if (pIndex > qIndex) {
//             pIndex = Math.floor((pIndex - 1)/2); 
//         } else {
//             qIndex = Math.floor((qIndex - 1)/2); 
//         }
//     }
//     return skeleton[qIndex];
};