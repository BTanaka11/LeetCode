/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let countProcessed = 0;
    
    for (let i = 0; i < nums.length; i ++) {
        let index = (i + k) % nums.length;
        let number = nums[i]
        while(index > i) {
            let numb = nums[index];
            nums[index] = number;
            number = numb;
            index = (index + k) % nums.length;
            countProcessed ++;
        }
        nums[index] = number;
        countProcessed ++;
        if (countProcessed === nums.length) {
            return nums;
        }
        
    }
    
};