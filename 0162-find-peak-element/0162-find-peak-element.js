/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0, right=nums.length - 1;
    while (left <= right) {
        if (nums[left] > nums[left + 1]) {
            return left;
        }
        if (nums[right] > nums[right - 1]) {
            return right;
        }
        left ++;
        right --;
    }
    return 0
};