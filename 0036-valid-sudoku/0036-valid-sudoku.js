/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
//     let rowsHist = new Array(9).fill(null).map(()=>(new Array(9)))
//     let colsHist = new Array(9).fill(null).map(()=>(new Array(9)))
//     let quadrantHist = new Array(9).fill(null).map(()=>(new Array(9)))
    
//     for (let r = 0; r < 9; r ++) {        
//         for (let c= 0; c < 9; c ++) {
//             let cell = board[r][c];
//             if (cell != '.') {
//                 cell = Number(cell) - 1;
//                 if (rowsHist[r][cell] === true) {
//                     return false;
//                 }
//                 rowsHist[r][cell] = true;
//                 if (colsHist[c][cell]  === true) {
//                     return false;
//                 }
//                 colsHist[c][cell] = true;
//                 let quad = (Math.ceil((r+1)/3) - 1) * 3 + Math.ceil((c+1)/3) - 1;
//                 if (quadrantHist[quad][cell]  === true) {
//                     return false;
//                 }
//                 quadrantHist[quad][cell] = true;
//             };
//         }
//     }
    // return true;
    for (let i = 0; i < 9; i++) {
    let row = new Set(),
        col = new Set(),
        box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
      
      if (_row != '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }
      
      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      } 
    }
  }
  return true
};