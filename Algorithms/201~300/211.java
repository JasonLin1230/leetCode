class WordDictNode {
    boolean isWord;
    WordDictNode[] children = new WordDictNode[26];
    public WordDictNode() {}
}

class WordDictionary {
    private WordDictNode root;

    /** Initialize your data structure here. */
    public WordDictionary() {
        root = new WordDictNode();
    }
    
    /** Adds a word into the data structure. */
    public void addWord(String word) {
        WordDictNode curr = root;
        for(char item : word.toCharArray()){
            if(curr.children[item-'a'] == null){
                WordDictNode children = new WordDictNode();
                curr.children[item-'a'] = children;
            }
            curr = curr.children[item-'a'];
        }
        curr.isWord = true;
    }
    
    /** Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. */
    public boolean search(String word) {
        return backtrackMatch(word.toCharArray(),0,root);
    }
    
    private boolean backtrackMatch(char[] wordArr, int d, WordDictNode node) {
        if(d == wordArr.length){
            return node.isWord;
        }
        if(wordArr[d] == '.'){
            for(int i=0; i<26; i++){
                if(node.children[i]!=null && backtrackMatch(wordArr,d+1,node.children[i])){
                    return true;
                }
            }
        }else{
            return node.children[wordArr[d]-'a']!=null && backtrackMatch(wordArr,d+1,node.children[wordArr[d]-'a']);
        }
        return false;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.addWord(word);
 * boolean param_2 = obj.search(word);
 */

//  bool search(word) returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True