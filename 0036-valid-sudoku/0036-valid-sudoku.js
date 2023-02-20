/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowsHist = new Array(9).fill(null).map(()=>(new Array(9).fill(false)))
    let colsHist = new Array(9).fill(null).map(()=>(new Array(9).fill(false)))
    let quadrantHist = new Array(9).fill(null).map(()=>(new Array(9).fill(false)))

    for (let r = 0; r < 9; r ++) {
        for (let c= 0; c < 9; c ++) {
            let cell = board[r][c];
            if (cell != '.') {
                cell = Number(cell) - 1;
                if (rowsHist[r][cell] === true) {
                    return false;
                }
                rowsHist[r][cell] = true;
                if (colsHist[c][cell]  === true) {
                    return false;
                }
                colsHist[c][cell] = true;
                let quad = (Math.ceil((r+1)/3) - 1) * 3;
                let colHelp = Math.ceil((c+1)/3);
                quad += colHelp - 1;
                if (quadrantHist[quad][cell]  === true) {
                    return false;
                }
                quadrantHist[quad][cell] = true;
            };
        }
    }
    return true;
};