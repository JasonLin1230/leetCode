/**
 * @param {character[][]} board
 * @return {boolean}
 */
// Your runtime beats 97.52 % of javascript submissions
var isValidSudoku = function(board) {
    for(let i=0;i<9;i++){
        let indexMap=new Map();
        for(let j=0;j<9;j++){
            if(board[i][j]==="."){
                continue;
            }
            if(!indexMap.has(board[i][j])){
                indexMap.set(board[i][j],j);
            }else{
                return false;
            }
        }
    }
    for(let i=0;i<9;i++){
        let indexMap=new Map();
        for(let j=0;j<9;j++){
            if(board[j][i]==="."){
                continue;
            }
            if(!indexMap.has(board[j][i])){
                indexMap.set(board[j][i],j);
            }else{
                return false;
            }
        }
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            let indexMap=new Map();
            for(let m=i*3;m<(i+1)*3;m++){
                for(let n=j*3;n<(j+1)*3;n++){
                    if(board[m][n]==="."){
                        continue;
                    }
                    if(!indexMap.has(board[m][n])){
                        indexMap.set(board[m][n],n);
                    }else{
                        return false;
                    }
                }
            }
        }
    }
    return true;
};