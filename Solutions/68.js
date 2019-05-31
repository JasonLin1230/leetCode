/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
// Runtime: 40 ms, faster than 100% of JavaScript online submissions for Text Justification.
// Memory Usage: 33.8 MB, less than 56.72% of JavaScript online submissions for Text Justification.

// This problem teaches us the world is ugly and have endless corner case to deal with.

var fullJustify = function(words, maxWidth) {
    let len = words.length;
    let remain = maxWidth;
    let tempStr = [];
    let rtn = [];
    for(let i=0;i<len;i++){
        let tempLen = words[i].length;
        if(tempLen + 1 <= remain){
            tempStr.push(words[i]);
            remain = remain - tempLen - 1;
            if(i == len-1){
                let l = tempStr.length;
                let tempRtn = "";
                let lastRemain = maxWidth;
                for(let n=0;n<l;n++){
                    tempRtn = tempRtn + tempStr[n] + " ";
                    lastRemain = lastRemain - tempStr[n].length -1;
                }
                for(let m=0;m<lastRemain;m++){
                    tempRtn+=" ";
                }
                rtn.push(tempRtn);
            }
        }else if(tempLen == remain){
            tempStr.push(words[i]);
            let l = tempStr.length;
            if(l == 1){
                rtn.push(words[i]);
            }else{
                let tempRtn = "";
                tempRtn += tempStr[0];
                for(let m=1;m<l;m++){
                    tempRtn = tempRtn + " " + tempStr[m];
                }
                rtn.push(tempRtn);
            }
            remain = maxWidth;
            tempStr = [];
        }else{
            let l = tempStr.length;
            let tempRtn = "";
            remain += l;
            if(l == 1){
                tempRtn += tempStr[0];
                for(let j=0;j<remain;j++){
                    tempRtn += " ";
                }
            }else{
                let e = parseInt(remain/(l-1));
                let f = remain%(l-1);
                tempRtn += tempStr[0];
                for(let k=1;k<l;k++){
                    if(f > 0){
                        for(let m=0;m<e+1;m++){
                            tempRtn+=" ";
                        }
                        f--;
                    }else{
                        for(let m=0;m<e;m++){
                            tempRtn+=" ";
                        }
                    }
                    tempRtn += tempStr[k];
                }
            }
            rtn.push(tempRtn);
            remain = maxWidth;
            tempStr = [];
            i--;
        }
    }
    return rtn;
};