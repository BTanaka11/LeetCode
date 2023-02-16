/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let results = []
    let rowProcessed = 0;
    let colProcessed = 0;
    while (results.length < matrix.length * matrix[0].length) {
        for (let c = colProcessed; c < matrix[0].length - colProcessed; c++) {
            results.push(matrix[rowProcessed][c]);
        }
        rowProcessed++;

        for (let r = rowProcessed; r <= matrix.length - rowProcessed; r ++) {
            results.push(matrix[r][matrix[0].length - 1 - colProcessed]);
        }
        colProcessed ++;

        if (rowProcessed <= matrix.length/2) {
            for (let c = matrix[0].length - 1 - colProcessed; c >= colProcessed -1; c --) {
                results.push(matrix[matrix.length - rowProcessed][c]);
            }
        }

        if (colProcessed <= matrix[0].length/2) {
            for (let r = matrix.length-1 - rowProcessed; r >= rowProcessed; r --) {
                results.push(matrix[r][colProcessed - 1]);
            }
        }
    }
    return results
    
};
//[[1,2,3,4,5,6,7,8,9,10],[11,12,18,28,38,48,57,67,77,87],[96,99,98,97,15,25,35,45,54,64],[74,84,91,92,93,94,12,22,23,24]]