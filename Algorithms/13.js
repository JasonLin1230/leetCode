/**
 * @param {string} s
 * @return {number}
 */

//Runtime: 164 ms, faster than 97.59% of JavaScript online submissions for Roman to Integer.
//Memory Usage: 39.6 MB, less than 92.51% of JavaScript online submissions for Roman to Integer.
var romanToInt = function(s) {
    let arr=s.split("");
    let res=0,pre=null;
    for(let i=0;i<arr.length;i++){
        switch(arr[i]){
            case "I":
                res+=1;
                break;
            case "V":
                if(pre === "I"){
                    res+=3;
                }else{
                    res+=5;
                }
                break;
            case "X":
                if(pre === "I"){
                    res+=8;
                }else{
                    res+=10;
                }
                break;
            case "L":
                if(pre === "X"){
                    res+=30;
                }else{
                    res+=50;
                }
                break;
            case "C":
                if(pre === "X"){
                    res+=80;
                }else{
                    res+=100;
                }
                break;
            case "D":
                if(pre === "C"){
                    res+=300;
                }else{
                    res+=500;
                }
                break;
            case "M":
                if(pre === "C"){
                    res+=800;
                }else{
                    res+=1000;
                }
                break;
        }
        pre=arr[i];
    }
    return res;
};