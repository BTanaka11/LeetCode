/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    
    let recurse = (r, c) => {
        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] != 'O') {
            return;
        }
        board[r][c] = 't';
        recurse(r + 1, c);
        recurse(r, c + 1);
        recurse(r - 1, c);
        recurse(r, c - 1);
    }
    
    for (let c = 0; c < board[0].length; c ++) {
        if (board[0][c] === 'O') {
            recurse(0, c);
        }
        if (board[board.length - 1][c] === 'O') {
            recurse(board.length - 1, c);
        }
    }
    
    for (let r = 0; r < board.length; r ++) {
        if (board[r][0] === 'O') {
            recurse(r, 0);
        }
        if (board[r][board[0].length - 1] === 'O') {
            recurse(r, board[0].length - 1);
        }
    }
    console.log(board)
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