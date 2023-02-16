/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let results = [];
    let topRowIndex = 0;
    let bottomRowIndex = matrix.length - 1;
    let leftColIndex = 0;
    let rightColIndex = matrix[0].length - 1;
    let typz = 1;
    while (results.length < (matrix.length * matrix[0].length)) {
        switch (typz) {
            case 1:
                for (let c = leftColIndex; c <= rightColIndex; c ++) {
                    results.push(matrix[topRowIndex][c]);
                }
                topRowIndex ++;
                break;
            case 2:
                for (let r = topRowIndex; r <= bottomRowIndex; r ++) {
                    results.push(matrix[r][rightColIndex])
                };
                rightColIndex --;
                break;
            case 3:
                for (let c = rightColIndex; c >= leftColIndex; c --) {
                    results.push(matrix[bottomRowIndex][c]);
                }
                bottomRowIndex--;
                break;
            case 4:
                for (let r = bottomRowIndex; r >= topRowIndex; r --) {
                    results.push(matrix[r][leftColIndex]);
                };
                leftColIndex ++;
                break;
        }
        if (typz === 4) {
            typz = 1;
        } else {
            typz++;
        }
    }
    return results;
};