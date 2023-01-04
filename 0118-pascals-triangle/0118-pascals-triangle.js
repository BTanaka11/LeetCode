/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let results = new Array(numRows);
    results[0] = [1];
    for (let i = 1; i < numRows; i ++) {
        let subArray = new Array(i + 1);
        
        for (let k = 0; k < subArray.length; k ++) {
            subArray[k] = (results[i - 1][k - 1] || 0) + (results[i - 1][k] || 0);
        }
        results[i] = subArray
    }
    return results;
};