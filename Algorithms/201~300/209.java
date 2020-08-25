class Solution {
    public int minSubArrayLen(int s, int[] nums) {
        int len = nums.length;
        if(len < 1){
            return 0;
        }
        int left = 0, right = 1;
        int minLen = len+1;
        int sum = nums[left];
        while(left < len && right <= len){
            if(sum >= s){
                minLen = right-left<minLen?right-left:minLen;
                sum -= nums[left];
                left++;
            }else{
                if(right == len){
                    break;
                }
                sum += nums[right];
                right++;
            }
        }
        return minLen>len?0:minLen;
    }
}

// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.

// Runtime: 1 ms, faster than 99.97% of Java online submissions for Minimum Size Subarray Sum.
// Memory Usage: 39.2 MB, less than 95.68% of Java online submissions for Minimum Size Subarray Sum.