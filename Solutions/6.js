/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var arr=s.split("");
    var arrLength=arr.length;
    var res=[];
    for(var row=0;row<numRows;++row){
        var i=row;
        while(i<arrLength && arr[i]){
            res.push(arr[i]);
            if(row!==0 && row!==numRows-1 && arr[i+(numRows-1)*2-row*2]){
                res.push(arr[i+(numRows-1)*2-row*2]);
            }
            if(numRows === 1){
                i++;
            }else{
                i=i+(numRows-1)*2;
            }
        }
    }
    return res.join("");
};