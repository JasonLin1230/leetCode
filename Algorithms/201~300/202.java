class Solution {
    public boolean isHappy(int n) {
        HashSet<Integer> set = new HashSet<Integer>();
        while(n != 1){
            int tmp = 0;
            while(n != 0){
                tmp += Math.pow(n%10, 2);
                n /= 10;
            }
            if(set.contains(tmp)){
                return false;
            }else{
                set.add(tmp);
                n = tmp;
            }
        }
        return true;
    }
}
// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1