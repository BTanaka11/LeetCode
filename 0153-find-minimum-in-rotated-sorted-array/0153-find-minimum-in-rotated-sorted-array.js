/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (right - left > 1) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid;
        } else if (nums[left] > nums[mid]) {
            right = mid;
        } else {
            return nums[left]
        }
    }
    return Math.min(nums[left], nums[right]);
};