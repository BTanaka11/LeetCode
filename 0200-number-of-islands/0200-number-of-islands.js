/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    
    let markSurroundingLands = function (row, col) {
        if (row >= grid.length || row < 0 || col >= grid[0].length || col < 0) {
            return;
        }
        if (grid[row][col] === "1") {
            grid[row][col] = "x";
            markSurroundingLands(row + 1, col)
            markSurroundingLands(row, col + 1)
            markSurroundingLands(row - 1, col)
            markSurroundingLands(row, col - 1)
        }
    }
    let count = 0;
    for (let r = 0; r < grid.length; r ++) {
        for (let c = 0; c < grid[0].length; c ++) {
            if (grid[r][c] === "1") {
                count ++;
                markSurroundingLands(r,c)
            }
        }
    }
    return count;
};