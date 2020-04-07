/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let i=0,arr=[];
    while(num!==0){
        arr[i++]=num%10;
        num=parseInt(num/10);
    }
    let res=[];
    for(let j=i-1;j>-1;j--){
        res.push(match(arr[j],j+1));
    }
    return res.join("");
    
};
var match = function(n,r){
    switch(r){
        case 1:
            switch(n){
                case 1:
                    return "I";
                case 2:
                    return "II";
                case 3:
                    return "III";
                case 4:
                    return "IV";
                case 5:
                    return "V";
                case 6:
                    return "VI";
                case 7:
                    return "VII";
                case 8:
                    return "VIII";
                case 9:
                    return "IX";
            }
            break;
        case 2:
            switch(n){
                case 1:
                    return "X";
                case 2:
                    return "XX";
                case 3:
                    return "XXX";
                case 4:
                    return "XL";
                case 5:
                    return "L";
                case 6:
                    return "LX";
                case 7:
                    return "LXX";
                case 8:
                    return "LXXX";
                case 9:
                    return "XC";
            }
            break;
        case 3:
            switch(n){
                case 1:
                    return "C";
                case 2:
                    return "CC";
                case 3:
                    return "CCC";
                case 4:
                    return "CD";
                case 5:
                    return "D";
                case 6:
                    return "DC";
                case 7:
                    return "DCC";
                case 8:
                    return "DCCC";
                case 9:
                    return "CM";
            }
            break;
        case 4:
            switch(n){
                case 1:
                    return "M";
                case 2:
                    return "MM";
                case 3:
                    return "MMM";
            }
            break;
    }
}