/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//Runtime: 124 ms, faster than 95.10% of JavaScript online submissions for Median of Two Sorted Arrays.
//Memory Usage: 38.8 MB, less than 83.95% of JavaScript online submissions for Median of Two Sorted Arrays.
//---待优化---
var findMedianSortedArrays = function(nums1, nums2) {
    var len1=nums1.length,len2=nums2.length;
    if(len1 === 0){
        if(len2%2 == 0){
            var res=(nums2[len2/2-1]+nums2[len2/2])/2;
        }else{
            var res=nums2[parseInt(len2/2)];
        }
        return res.toFixed(1);
    }
    if(len2 === 0){
        if(len1%2 == 0){
            var res=(nums1[len1/2-1]+nums1[len1/2])/2;
        }else{
            var res=nums1[parseInt(len1/2)];
        }
        return res.toFixed(1);
    }
    if((len1+len2)%2 == 0){
        //偶数
        var index=(len1+len2)/2-1;
        var i=0,j=0,count=0,res;
        while(i<len1 && j<len2){
            if(count === index){
                break;
            }
            if(nums1[i]<nums2[j]){
                i++;
            }else{
                j++;
            }
            count++;
        }
        if(count === index && i<len1 && j<len2){
            if(nums1[i]<nums2[j]){
                var left=nums1[i];
                if(i+1<len1){
                    var right=nums1[i+1]<nums2[j]?nums1[i+1]:nums2[j];
                }else{
                    var right=nums2[j];
                }
            }else{
                var left=nums2[j];
                if(j+1<len2){
                    var right=nums1[i]<nums2[j+1]?nums1[i]:nums2[j+1];
                }else{
                    var right=nums1[i];
                }
            }
            res=(left+right)/2;
        }else if(i<len1){
            while(count !== index){
                i++;
                count++;
            }
            res=(nums1[i]+nums1[i+1])/2;
        }else{
            while(count !== index){
                j++;
                count++;
            }
            res=(nums2[j]+nums2[j+1])/2;
        }
        return res.toFixed(1);
    }else{
        //奇数
        var index=parseInt((len1+len2)/2);
        var i=0,j=0,count=0,res;
        while(i<len1 && j<len2){
            if(count === index){
                break;
            }
            if(nums1[i]<nums2[j]){
                i++;
            }else{
                j++;
            }
            count++;
        }
        if(count === index && i<len1 && j<len2){
            res=(nums1[i]<nums2[j])?nums1[i]:nums2[j];
        }else if(i<len1){
            while(count !== index){
                i++;
                count++;
            }
            res=nums1[i];
        }else{
            while(count !== index){
                j++;
                count++;
            }
            res=nums2[j];
        }
        return res.toFixed(1);
    }
};