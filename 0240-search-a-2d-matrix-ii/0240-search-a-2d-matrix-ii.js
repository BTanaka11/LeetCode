/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    // let recurse = (rStart, rEnd, cStart, cEnd) => {
    //     if (rStart > rEnd || cStart > cEnd) {
    //         return false;
    //     }
    //     if (matrix[rStart][cStart] > target || matrix[rEnd][cEnd] < target) {
    //         return false;
    //     }
    //     if (rStart === rEnd && cStart === cEnd) {
    //         return matrix[rStart][cStart] === target;
    //     }
    //     let rMid  = Math.floor((rStart + rEnd) / 2);
    //     let cMid = Math.floor((cStart + cEnd) / 2);
    //     if (recurse(rStart, rMid, cStart, cMid) || recurse(rStart, rMid, cMid + 1, cEnd) || recurse(rMid + 1, rEnd, cStart, cMid) || recurse(rMid + 1, rEnd, cMid + 1, cEnd)) {
    //         return true;
    //     }
    //     return false;
    // }
    // return recurse(0, matrix.length - 1, 0, matrix[0].length - 1);
    
    //strategy 2 = loop. alternate trimming rows and columns. loop rows from bottom right to top right until cell < target is found. set X = thisRow || 0. then, all rows at or above that row can be permananety excluded. then loop from row X on left to the bottom row on left until value greater than target is found. set Y = this row, and all rows at or below can be permanantely excluded.
    
    //next, within filtered block of rows....loop from bottom row, rightside to bottom row left side until value < target is found. set Z = that column || 0. all columns at or b4 can be permanently excluded. then loop from top row, column Z to top row right column until value > target is found. set W = this column, and all columns on or after can be permanatntly excluded
    
    if (matrix[0][0] === target) {return true}
    let recurse = function (rStart, rEnd, cStart, cEnd, typeRow, changedb4 = false) {
        // console.log([...arguments])
        if (rStart > rEnd || cStart > cEnd) {
            return false;
        }
        if (rStart === rEnd && cStart === cEnd && matrix[rStart][cStart] === target) {
            return true;
        }
        let changed = false;
        if (typeRow) {
            //process rows;
            let r = rEnd;
            while (r >= rStart && matrix[r][cEnd] >= target) {
                r --;
            }
            
            if (rStart != r + 1) {
                changed = true;
                rStart = r + 1;
            }
            
            r = rStart
            while (r <= rEnd && matrix[r][cStart] <= target) {
                r ++;
            }
            if (rEnd != r - 1) {
                changed = true;
                rEnd = r - 1;
            }
            
            if (!changed) {
                if (changedb4) {
                    return matrix[rStart].includes(target);
                } else {
                    return recurse (rStart, rEnd, cStart, cEnd, false, true)
                }
            } else {
                return recurse (rStart, rEnd, cStart, cEnd, false);
            }
            
        } else {
            //process columns;
            let c = cEnd;
            while (c >= cStart && matrix[rEnd][c] >= target) {
                c --;
            }
            if (cStart!= c + 1) {
                changed = true;
                cStart = c + 1;
            }
            
            c = cStart;
            while (c <= cEnd && matrix[rStart][c] <= target) {
                c ++;
            }
            if (cEnd!= c - 1) {
                changed = true;
                cEnd = c - 1;
            }
            
            if (!changed) {
                if (changedb4) {
                    return matrix[rStart].includes(target);
                } else {
                    return recurse (rStart, rEnd, cStart, cEnd, true, true)
                }
            } else {
                return recurse (rStart, rEnd, cStart, cEnd, true);
            }
        }
    }
    return recurse(0, matrix.length - 1, 0, matrix[0].length - 1, true);
};