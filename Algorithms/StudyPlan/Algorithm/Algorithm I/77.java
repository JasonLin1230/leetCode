// 77. Combinations
class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        combineHelper(n,k,new ArrayList<>(),result,1);
        return result;
    }
    public void combineHelper(int n, int k, List<Integer> temp, List<List<Integer>> result, int start) {
        if(temp.size() == k){
            result.add(new ArrayList<Integer>(temp));
            return;
        }
        for(int i=start;i<=n-(k-temp.size())+1;i++){
            temp.add(i);
            combineHelper(n,k,temp,result,i+1);
            temp.remove(temp.size()-1);
        }
    }
}