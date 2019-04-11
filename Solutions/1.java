class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> mapIndex = new HashMap<>();
        for(int i=0;i<nums.length;++i){
            mapIndex.put(nums[i],i);
        }
        for(int i=0;i<nums.length;++i){
            int temp=target-nums[i];
            if(mapIndex.containsKey(temp) && mapIndex.get(temp) != i){
                return new int[]{i,mapIndex.get(temp)};
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}