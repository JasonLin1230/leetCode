/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        return guessNumberHelper(0,n);
    }
    public int guessNumberHelper(int start, int end){
        int mid = start+(end-start)/2;
        if(guess(mid) == 0) return mid;
        if(guess(mid) < 0) return guessNumberHelper(start,mid-1);
        return guessNumberHelper(mid+1,end);
    }
}