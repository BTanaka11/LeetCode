/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largestSum = -Infinity;
    let tempSum = -Infinity;

    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] > tempSum + nums[i]) {
            tempSum = nums[i];
        } else {
            tempSum += nums[i]
        }
        if (tempSum > largestSum) {
            largestSum = tempSum;
        }
    }
    return largestSum;
};