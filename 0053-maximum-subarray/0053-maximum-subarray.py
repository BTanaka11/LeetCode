class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        tempSum = nums[0]
        maxSum = nums[0]
        for i in range(1, len(nums)):
            if nums[i] >= tempSum + nums[i]:
            # if tempSum + nums[i] <= nums[i]:
                if tempSum > maxSum:
                    maxSum = tempSum
                tempSum = nums[i]
            else:
                tempSum += nums[i]
            if tempSum > maxSum:
                maxSum = tempSum
            
        return max(maxSum, tempSum)
                
#         maxr = nums[0]
#         tempSum = nums[0]
        
#         for i in range(1, len(nums)):
#             if nums[i] + tempSum <= nums[i]:
#                 maxr = max(maxr, tempSum)
#                 tempSum = nums[i]
#             else:
#                 tempSum += nums[i]
#             if tempSum > maxr:
#                 maxr = tempSum
        
#         return maxr