/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let colsMarker = new Array(n).fill(0);
    let diagsMarker1 = new Array(2*n - 1).fill(0);
    let diagsMarker2 = new Array(2*n - 1).fill(0);
    let board = new Array(n).fill(null).map(()=>(new Array(n).fill('.')))
    let results = [];

    const recurse = (r, c, piecesPlaced) => {
        if (piecesPlaced === n) {
            results.push(board.map((item)=>(item.join(''))))
            return;
        }
        for (let row = r; row < n; row ++) {
            if (row > piecesPlaced) {
                return;
            }
            for (let col = c; col < n; col ++) {
                if (colsMarker[col] === 0 && diagsMarker1[row + col] === 0 && diagsMarker2[col - row + n - 1] === 0) {
                    board[row][col] = 'Q'
                    colsMarker[col] ++;
                    diagsMarker1[row + col] ++;
                    diagsMarker2[col - row + n - 1] ++;
                    piecesPlaced ++;
                    recurse(row + 1, 0, piecesPlaced);
                    piecesPlaced --;
                    board[row][col] = '.'
                    colsMarker[col] --;
                    diagsMarker1[row + col] --;
                    diagsMarker2[col - row + n - 1] --;
                }
            }
        }
    }
    recurse(0,0,0)
    return results;
};