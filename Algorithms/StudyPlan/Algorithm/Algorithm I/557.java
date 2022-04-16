// 557. Reverse Words in a String III
class Solution {
    public String reverseWords(String s) {
        String[] words = s.split(" ");
        StringBuilder res = new StringBuilder();
        for (String word : words){
            word = reverseString(word.toCharArray());
            res = res.append(" ").append(word);
        }
        return res.toString().substring(1);
    }
    public String reverseString(char[] s) {
        int left = 0, right = s.length-1;
        while(left < right){
            char temp = s[left];
            s[left++] = s[right];
            s[right--] = temp;
        }
        return String.valueOf(s);
    }
}