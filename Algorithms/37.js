/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// Runtime: 84 ms, faster than 80.71% of JavaScript online submissions for Sudoku Solver.
// Memory Usage: 34.9 MB, less than 95.65% of JavaScript online submissions for Sudoku Solver.
// backtracking
var solveSudoku = function(board) {
    solve(board,0,0);
};
var solve = function(board,row,col){
    if(row===9){
        return true;
    }
    if(col===9){
        return solve(board,row+1,0);
    }
    if(board[row][col]!=="."){
        return solve(board,row,col+1);
    }
    for(let test=1;test<=9;test++){
        test=test.toString();
        if(isValid(board,row,col,test)){
            board[row][col]=test;
            if(solve(board,row,col+1)){
                return true;
            }else{
                board[row][col]=".";
                
            }
        }
    }
    return false;
}
var isValid = function(board,row,col,val){
    for(let i=0;i<9;i++){
        if(board[i][col]===val){
            return false;
        }
    }
    for(let j=0;j<9;j++){
        if(board[row][j]===val){
            return false;
        }
    }
    let r=row-row%3,c=col-col%3;
    for(let i=r;i<r+3;i++){
        for(let j=c;j<c+3;j++){
            if(board[i][j]===val){
                return false;
            }
        }
    }
    return true;
}