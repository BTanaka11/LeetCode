/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    let haire = nums[nums[0]];
    let tortoise = nums[0];
    while (haire != tortoise) {
        haire = nums[nums[haire]];
        tortoise = nums[tortoise];
    }
    
    tortoise = nums[0];
    haire = nums[haire]
    while (tortoise != haire) {
        tortoise = nums[tortoise];
        haire = nums[haire];
    }
    return haire
//     1 > 3 > (2 > 4 > 2) 
    
//     lengthHaire = lengthToCyclestart + pathwithinCycle = 2(lengthToCyclestart + countofrotations * (pathwithinCycle + totalcirlepath))
//     3 > 4 > 2 > 3
    
};