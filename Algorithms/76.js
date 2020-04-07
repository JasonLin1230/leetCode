/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let arr1 = s.split(""), arr2 = t.split("");
    let len1 = arr1.length, f = 0;
    let indexArr = [];
    while(f<len1){
        let index = arr2.indexOf(arr1[f]);
        if(index != -1){
            indexArr.push(f);
            arr2.splice(index,1);
            if(arr2.length == 0){
                break;
            }
        }else{
            f++;
        }
    }
    if(f == len1){
        return "";
    }
    let min = f-indexArr[0]+1, minS = indexArr[0], minF = f;
    f++;
    let j = 0, flag = true;
    while(f < len1){
        if(flag == true){
            target = arr1[indexArr[j]];  
        }
        if(arr1[f] == target){
            if(min>(f-indexArr[++j]+1)){
                minS = indexArr[j];
                minF = f;
                min = f-indexArr[j]+1;
            }
            flag = true;
        }else{
            f++;
            flag = false;
        }
    }
    return arr1.slice(minS,minF+1).join("");
};