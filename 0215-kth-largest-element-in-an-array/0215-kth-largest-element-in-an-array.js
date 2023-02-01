/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //build max heap. at the end, extract max from it k times returning kth result.
    
    for (let i = 1; i < nums.length; i ++) {
        let pI = Math.floor((i - 1) / 2);
        let cI = i;
        
        while (pI >= 0 && nums[pI] < nums[cI]) {
            [nums[pI], nums[cI]] = [nums[cI], nums[pI]];
            cI = pI;
            pI = Math.floor((cI - 1) / 2);
        }
    }
    
    for (let i = nums.length - 1; i > nums.length - k; i --) {
        nums[0] = nums[i];
        nums[i] = -Infinity;
        let pI = 0;
        while (pI < i - 1 && (nums[pI] < nums[pI*2 + 1] || nums[pI] < nums[pI*2 + 2])) {
            if (nums[pI*2 + 1] > nums[pI*2 + 2]) {
                [nums[pI], nums[pI*2 + 1]] = [nums[pI *2 + 1], nums[pI]];
                pI =  pI*2 + 1;
            } else {
                [nums[pI], nums[pI*2 + 2]] = [nums[pI *2 + 2], nums[pI]];
                pI =  pI*2 + 2;
            }
        }
    }
    return nums[0];
    
};