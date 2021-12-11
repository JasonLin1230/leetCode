// 167. Two Sum II - Input Array Is Sorted
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int[] indices = new int[2];
        if(numbers == null || numbers.length < 2) return indices;
        int left = 0, right = numbers.length-1;
        while(left < right){
            int r = numbers[left] + numbers[right];
            if(r == target){
                indices[0] = left+1;
                indices[1] = right+1;
                break;
            }else if(r < target){
                left++;
            }else{
                right--;
            }
        }
        return indices;
    }
}