/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //build max heap. at the end, extract max from it k times returning kth result.
    
//     for (let i = 1; i < nums.length; i ++) {
//         let pI = Math.floor((i - 1) / 2);
//         let cI = i;
        
//         while (pI >= 0 && nums[pI] < nums[cI]) {
//             [nums[pI], nums[cI]] = [nums[cI], nums[pI]];
//             cI = pI;
//             pI = Math.floor((cI - 1) / 2);
//         }
//     }
    
//     for (let i = nums.length - 1; i > nums.length - k; i --) {
//         nums[0] = nums[i];
//         nums[i] = -Infinity;
//         let pI = 0;
//         while (pI < i - 1 && (nums[pI] < nums[pI*2 + 1] || nums[pI] < nums[pI*2 + 2])) {
//             if (nums[pI*2 + 1] > nums[pI*2 + 2]) {
//                 [nums[pI], nums[pI*2 + 1]] = [nums[pI *2 + 1], nums[pI]];
//                 pI =  pI*2 + 1;
//             } else {
//                 [nums[pI], nums[pI*2 + 2]] = [nums[pI *2 + 2], nums[pI]];
//                 pI =  pI*2 + 2;
//             }
//         }
//     }
//     return nums[0];
    if (nums.length === 1) {
        return nums[0]
    }
    function partition(left, right, pivotIndex) {
        let pivotElement = nums[pivotIndex];
        let helperIndex = left;
        [nums[right], nums[pivotIndex]] = [nums[pivotIndex], nums[right]];
        for (let i = left; i <= right; i ++) {
            if (nums[i] > pivotElement) {
                [nums[i], nums[helperIndex]] = [nums[helperIndex], nums[i]];
                helperIndex ++;
            }
        }
        [nums[right], nums[helperIndex]] = [nums[helperIndex], nums[right]];
        return helperIndex;
    }
    
    let left = 0;
    let right = nums.length - 1;
    while (right >= left) {
        let resultIndex = partition(left, right, Math.floor((left + right)/2));
        if (resultIndex === k - 1) {
            return nums[resultIndex];
    
        } else if (resultIndex > k - 1) {
            right = resultIndex - 1;
        } else {
            left = resultIndex + 1;
        }
    }
};