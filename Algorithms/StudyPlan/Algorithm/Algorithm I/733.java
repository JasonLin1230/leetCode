// 733. Flood Fill
class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        if(image[sr][sc] != newColor) {
            dfs(image,sr,sc,image[sr][sc],newColor);
        }
        return image;
    }
    
    public void dfs(int[][] image, int sr, int sc, int oldColor, int newColor) {
        if (oldColor == image[sr][sc]) {
            image[sr][sc] = newColor;
            if (sr>0) dfs(image,sr-1,sc,oldColor,newColor);
            if (sr<image.length-1) dfs(image,sr+1,sc,oldColor,newColor);
            if (sc>0) dfs(image,sr,sc-1,oldColor,newColor);
            if (sc<image[0].length-1) dfs(image,sr,sc+1,oldColor,newColor);
        }
    }
}