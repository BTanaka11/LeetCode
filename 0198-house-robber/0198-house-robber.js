/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    for (let i = 1; i < nums.length; i ++) {
        nums[i] = Math.max(nums[i] + (nums[i - 2] || 0), nums[i-1])
    }
    return nums[nums.length-1]
};