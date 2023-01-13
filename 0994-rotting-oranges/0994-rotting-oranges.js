/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    let result = 0;
    let rottens = []
    let freshCount = 0;
    
    for (let i = 0; i < grid.length; i ++) {
        for (let k = 0; k < grid[0].length; k ++) {
            if (grid[i][k] === 2) {
                rottens.push([i, k])
            } else if (grid[i][k] === 1) {
                freshCount ++;
            }      
        }
    }
    
    while (freshCount > 0) {
        let touched = false;
        rottens.forEach((item)=> {
            if (item[0] > 0 && grid[item[0]-1][item[1]] === 1) {
                grid[item[0]-1][item[1]] = 2;
                touched = true;
                rottens.push([item[0]-1, item[1]]);
                freshCount --;
            }
            
            if (item[1] < grid[0].length - 1 && grid[item[0]][item[1] + 1] === 1) {
                grid[item[0]][item[1] + 1] = 2;
                touched = true;
                rottens.push([item[0], item[1] + 1]);
                freshCount --;
            }
            
            if (item[0] < grid.length - 1 && grid[item[0] + 1][item[1]] === 1) {
                grid[item[0] + 1][item[1]] = 2;
                touched = true;
                rottens.push([item[0] + 1, item[1]]);
                freshCount --;
            }
            
            if (item[1] > 0 && grid[item[0]][item[1] - 1] === 1) {
                grid[item[0]][item[1] - 1] = 2;
                touched = true;
                rottens.push([item[0], item[1] - 1]);
                freshCount --;
            }
        });
        if (!touched) {
            return -1;
        }
        result ++;
    }
        
    return result;
};