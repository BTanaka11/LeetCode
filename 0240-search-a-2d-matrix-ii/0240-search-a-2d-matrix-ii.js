/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let recurse = (rStart, rEnd, cStart, cEnd) => {
        if (rStart > rEnd || cStart > cEnd) {
            return false;
        }
        if (matrix[rStart][cStart] > target || matrix[rEnd][cEnd] < target) {
            return false;
        }
        if (rStart === rEnd && cStart === cEnd) {
            return matrix[rStart][cStart] === target;
        }
        let rMid  = Math.floor((rStart + rEnd) / 2);
        let cMid = Math.floor((cStart + cEnd) / 2);
        if (recurse(rStart, rMid, cStart, cMid) || recurse(rStart, rMid, cMid + 1, cEnd) || recurse(rMid + 1, rEnd, cStart, cMid) || recurse(rMid + 1, rEnd, cMid + 1, cEnd)) {
            return true;
        }
        return false;
    }
    return recurse(0, matrix.length - 1, 0, matrix[0].length - 1);
    
};