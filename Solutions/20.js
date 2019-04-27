/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr=s.split("");
    let stack=[];
    let len=arr.length;
    let i=0;
    while(i<len){
        switch(arr[i]){
            case "(":
            case "[":
            case "{":
                stack.push(arr[i]);
                break;
            case ")":
            case "]":
            case "}":
                top=stack.pop();
                if(!match(top,arr[i])){
                    return false;
                }
                break;
        }
        i++;
    }
    return stack.length==0;
};
var match = function(a,b){
    switch(a){
        case "(":
            if(b === ")"){
                return true;
            }else{
                return false;
            }
            break;
            
        case "[":
            if(b === "]"){
                return true;
            }else{
                return false;
            }
            break;
            
        case "{":
            if(b === "}"){
                return true;
            }else{
                return false;
            }
            break;
    }
}

// trick solution
// WOW
// var isValid = function(s) {
//     if(!s) return true;
//     var stack=[];
//     var table={'(':')','[':']','{':'}'}
//     for(var i=0;i<s.length;i++){
//         if(s[i] in table){
//             stack.push(s[i]);
//         }else{
//             if(table[stack[stack.length-1]]==s[i]){
//                 stack.pop();
//             }else{
//                 return false;
//             }
//         }
//     }
//     return stack.length==0;
// };