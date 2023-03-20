class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxr = nums[0]
        tempSum = nums[0]
        
        for i in range(1, len(nums)):
            
            if nums[i] + tempSum <= nums[i]:
                maxr = max(maxr, tempSum)
                tempSum = nums[i]
            else:
                tempSum += nums[i]
            if tempSum > maxr:
                maxr = tempSum
        
        return max(maxr, tempSum)