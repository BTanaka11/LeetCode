/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let stack = {};
    for (let i = 0; i < nums.length; i ++) {
        if (!stack[nums[i]]) {
            stack[nums[i]] = 1;
        } else {
            delete stack[nums[i]];
        }
    }
    return Number(Object.keys(stack)[0]);
};