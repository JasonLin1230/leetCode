/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let row = matrix.length;
    if(row == 0){
        return [];
    }
    let col = matrix[0].length;
    if(col == 0){
        return [];
    }
    let rtn = [],left = 0,top = 0,right = col,bottom = row;
    while(top < bottom && left < right){
        for(let i=left;i<right;i++){
            rtn.push(matrix[top][i]);
        }
        top++;
        
        for(let i=top;i<bottom;i++){
            rtn.push(matrix[i][right-1]);
        }
        right--;
        
        if(top < bottom){
            for(let i=right-1;i>=left;i--){
                rtn.push(matrix[bottom-1][i]);
            }
        }
        bottom--;
        
        if(left < right){
            for(let i=bottom-1;i>=top;i--){
                rtn.push(matrix[i][left]);
            }
        }
        left++;
    }
    return rtn;
};