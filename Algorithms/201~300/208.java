class TrieNode {
    boolean isWord;
    TrieNode[] children = new TrieNode[26];
    public TrieNode() {}
}

class Trie {
    private TrieNode root;
    
    /** Initialize your data structure here. */
    public Trie() {
        root = new TrieNode();
    }
    
    /** Inserts a word into the trie. */
    public void insert(String word) {
        TrieNode curr = root;
        for(int i=0; i<word.length(); i++){
            if(curr.children[word.charAt(i)-'a'] == null){
                TrieNode children = new TrieNode();
                curr.children[word.charAt(i)-'a'] = children;
            }
            curr = curr.children[word.charAt(i)-'a'];
        }
        curr.isWord = true;
    }
    
    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        TrieNode curr = root;
        for(int i=0; i<word.length(); i++){
            curr = curr.children[word.charAt(i)-'a'];
            if(curr == null){
                return false;
            }
        }
        return curr.isWord;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        TrieNode curr = root;
        for(int i=0; i<prefix.length(); i++){
            curr = curr.children[prefix.charAt(i)-'a'];
            if(curr == null){
                return false;
            }
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */

//  字典树实现