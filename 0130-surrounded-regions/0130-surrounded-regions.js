/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    
    let recurse = (r, c) => {
        if (r < 0 || r === board.length || c < 0 || c === board[0].length || board[r][c] != 'O') {
            return;
        }
        board[r][c] = 't';
        recurse(r + 1, c);
        recurse(r - 1, c);
        recurse(r, c + 1);
        recurse(r, c - 1);
    }
    
    //top and bottom row
    for (let c = 0; c < board[0].length; c ++) {
        recurse(0, c);
        recurse(board.length - 1, c);
    }
    //left and right columns
    for (let r = 0; r < board.length; r ++) {
        recurse(r, 0);
        recurse(r, board[0].length - 1);
    }
    for (let r = 0; r < board.length; r ++) {
        for (let c = 0; c < board[0].length; c ++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X';
            } else if (board[r][c] === 't') {
                board[r][c] = 'O';
            }
        }
    }
};