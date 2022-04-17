class Solution {
    public double average(int[] salary) {
        double max = 0d;
        int M = Integer.MAX_VALUE, m = Integer.MIN_VALUE;
        for(int sa:salary){
            max += sa;
            m = Math.max(sa,m);
            M = Math.min(sa,M);
        }
        return (max-m-M) / (salary.length-2);
    }
}