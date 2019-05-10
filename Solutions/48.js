/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let l = 0;
    let h = matrix.length - 1;
    while(l < h){
        const dis = h - l;
        for(let i = 0; i < dis; i++){
            const index = l + i;
            swap(matrix,index,h,l,index);
            swap(matrix,h,h - i,l,index);
            swap(matrix,h - i,l,l,index);
        }
        l++;
        h--;
    }
    return matrix;
};
const swap = (matrix,i,j,m,n) => {
    let temp = matrix[i][j];
    matrix[i][j] = matrix[m][n];
    matrix[m][n] = temp;
}