/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let results = [];
    let helperHash = {};

    nums = nums.sort((a,b)=> {return a-b})
    nums.forEach((item, index)=>{
        helperHash[item] = index
    })

    let helperDupremove = {}
    for (let i = 0; i < nums.length - 2; i ++) {
        for (let k = i + 1; k < nums.length - 1; k ++) {
            let curSum = -(nums[i] + nums[k]);
            let tempHash = helperHash[curSum];
            if (tempHash != undefined && tempHash > k) {
                let str = `${nums[i]}-${nums[k]}-${curSum}`;
                
                if (helperDupremove[str] === undefined) {
                    results.push([nums[i], nums[k], curSum])
                    helperDupremove[str] = 1
                }
            }
            
        }
    }
    
    return results;
};