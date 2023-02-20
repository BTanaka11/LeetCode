/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowsHist = new Array(9).fill(null).map(()=>(new Set()))
    let colsHist = new Array(9).fill(null).map(()=>(new Set()))
    let quadrantHist = new Array(9).fill(null).map(()=>(new Set()))
    
    for (let r = 0; r < 9; r ++) {        
        for (let c= 0; c < 9; c ++) {
            let cell = board[r][c];
            if (cell != '.') {
                cell = Number(cell) - 1;
                if (rowsHist[r].has(cell)) {return false}
                rowsHist[r].add(cell);
                
                if (colsHist[c].has(cell)) {return false}
                colsHist[c].add(cell);
                
                let quad = (Math.ceil((r+1)/3) - 1) * 3 + Math.ceil((c+1)/3) - 1;
                if (quadrantHist[quad].has(cell)) {return false}
                quadrantHist[quad].add(cell);
            };
        }
    }
    return true;
};