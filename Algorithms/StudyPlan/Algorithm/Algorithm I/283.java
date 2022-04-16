// 283. Move Zeroes
class Solution {
    public void moveZeroes(int[] nums) {
        if(nums.length < 2){
            return;
        }
        int zeroIndex = 0, nonZeroIndex = 1;
        while(nonZeroIndex < nums.length){
            if(nums[zeroIndex]==0 && nums[nonZeroIndex]!=0){
                nums[zeroIndex++] = nums[nonZeroIndex];
                nums[nonZeroIndex++] = 0;
            }else{
                if(nums[zeroIndex] != 0){
                    zeroIndex++;
                }
                nonZeroIndex++;
            }
        }
    }
    
    public void moveZeroes2(int[] nums) {
        if(nums==null || nums.length<1) return;
        int insertPos = 0;
        for(int num:nums){
            if (num != 0) nums[insertPos++] = num;
        }
        while(insertPos < nums.length){
            nums[insertPos++] = 0;
        }
    }
}
