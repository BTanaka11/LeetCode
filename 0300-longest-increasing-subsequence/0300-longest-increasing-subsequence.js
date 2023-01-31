/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let hashz = new Array(nums.length).fill(null);
    let recursiveFunc = function(index, prevNumb) {
        
        let resultLen = 0;
        for (let i = index; i < nums.length; i ++) {
            if (nums[i] > prevNumb) {
                
                let resultz = hashz[i] != null ? hashz[i] : 1 + recursiveFunc(i + 1, nums[i]) 
                if (resultz > resultLen) {
                    resultLen = resultz
                }
            }
        }
        hashz[index - 1] = resultLen + 1;
        return resultLen
    }
    
    let maxSeq = 1;
    for (let i = 0; i < nums.length; i ++) {
        if (nums.length - i > maxSeq) {
            let results = 1 + recursiveFunc(i + 1, nums[i]);
            maxSeq = Math.max(maxSeq, results);
        }
    }
    return maxSeq;
};