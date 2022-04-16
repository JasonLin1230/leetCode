// 3. Longest Substring Without Repeating Characters
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> set = new HashSet<Character>();
        int max = 0, temp = 0, left = 0;
        char[] sArr = s.toCharArray();
        for(int i=0; i<sArr.length; i++){
            char item = sArr[i];
            if(set.contains(item)){
                max = Math.max(max,temp);
                while(left < i){
                    if(item == sArr[left]){
                        left++;
                        break;
                    }
                    set.remove(sArr[left]);
                    left++;
                    temp--;
                }
            }else{
                temp++;
            }
            set.add(item);
        }
        return Math.max(max,temp);
    }
}