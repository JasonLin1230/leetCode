// 695. Max Area of Island
class Solution {
    public int maxAreaOfIsland(int[][] grid) {
        int result = 0;
        for(int i=0;i<grid.length;i++){
            for(int j=0;j<grid[0].length;j++){
                if(grid[i][j] != 0) result = Math.max(result,dfs(grid,i,j,0));
            }
        }
        return result;
    }
    public int dfs(int[][] grid, int r, int c, int result) {
        result++;
        grid[r][c] = 0;
        if(r>0 && grid[r-1][c] != 0) result = dfs(grid,r-1,c,result);
        if(r<grid.length-1 && grid[r+1][c] != 0) result = dfs(grid,r+1,c,result);
        if(c>0 && grid[r][c-1] != 0) result = dfs(grid,r,c-1,result);
        if(c<grid[0].length-1 && grid[r][c+1] != 0) result = dfs(grid,r,c+1,result);
        return result;
    }
}