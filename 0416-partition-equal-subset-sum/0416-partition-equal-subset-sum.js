/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {

    let sum = nums.reduce((accumulator, item)=> {
        return accumulator + item;
    }, 0);
    if (sum % 2 != 0) {
        return false
    }
    sum /= 2;
    
    for (let i = 0; i < nums.length; i ++) {
        let currentNum = nums[i];
        nums[i] = new Array(sum).fill(null);
        for (let k = 0; k < sum; k ++) {
            if (currentNum > k + 1) {
                nums[i][k] = i === 0? 0 : nums[i - 1][k];
            } else {
                nums[i][k] = Math.max((i === 0 ? 0 : nums[i - 1][k]), (currentNum + (i === 0 ? 0 : (nums[i - 1][k - currentNum] || 0))))
            } 
        }
        if (nums[i][sum - 1] === sum) {
            return true;
        }
    }
    console.log(nums)
    return nums[nums.length - 1][sum - 1] === sum;

};