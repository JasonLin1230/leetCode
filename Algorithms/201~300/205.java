class Solution {
    public boolean isIsomorphic(String s, String t) {
        HashMap<Character,Character> map = new HashMap<Character,Character>();
        for(int i=0;i<s.length();i++){
            char a = s.charAt(i);
            char b = t.charAt(i);
            if(map.containsKey(a)){
                if(!map.get(a).equals(b)){
                    return false;
                }
                map.put(s.charAt(i),t.charAt(i));
            }else {
                if(map.containsValue(b)){
                    return false;
                }else{
                    map.put(a,b);
                }
            }
        }
        return true;
    }
}
// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false