/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let forwardArray = new Array(nums.length);
    forwardArray[0] = nums[0]
    let backwardArray = new Array(nums.length);
    backwardArray[nums.length - 1] = nums[nums.length - 1];
    
    for (let i = 1; i < nums.length; i ++) {
        forwardArray[i] = forwardArray[i - 1] * nums[i];
        backwardArray[nums.length - 1 - i] = backwardArray[nums.length - i] * nums[nums.length - 1 - i];
    };
    
    nums[0] = backwardArray[1];
    nums[nums.length - 1] = forwardArray[nums.length - 2];
    for (let i = 1; i < nums.length - 1; i ++) {
        nums[i] = forwardArray[i - 1] * backwardArray[i + 1];
    }
    return nums;
};