// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.
class Solution {
    public int rangeBitwiseAnd(int m, int n) {
        int c = 0;
        while(m != n){
            m>>=1;
            n>>=1;
            c++;
        }
        return m<<c;
    }
}