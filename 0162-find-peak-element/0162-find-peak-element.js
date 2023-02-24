/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let z = 0;
    while (z <= nums.length / 2) {
        if (nums[z] > nums[z + 1]) {
            return z;
        }
        if (nums[nums.length - 1 - z] > nums[nums.length - 2 - z]) {
            return nums.length - 1 - z;
        }
        z ++;
    }
    return 0
};