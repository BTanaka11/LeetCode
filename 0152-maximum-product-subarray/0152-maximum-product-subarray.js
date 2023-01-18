/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let max = nums[0];
    var indexFirstNegSum;
    var tempSum;
    for (let i = 0; i < nums.length; i ++) {
        nums[i] = i === 0 ? nums[i] : nums[i - 1] * nums[i];
        if (nums[i] < 0 ) {
            if (indexFirstNegSum !== undefined) {
                tempSum = nums[i] / nums[indexFirstNegSum]
                if (tempSum > max) {
                    max = tempSum;
                }
            } else {
                indexFirstNegSum = i
            }
        } else if (nums[i] > 0) {
            if (nums[i] > max) {
                max = nums[i]
            }
        } else {
            // equals zero
            if (0 > max) {
                max = 0;
            }
            indexFirstNegSum = undefined;
            nums[i] = 1;
        }
    }
    return max
};