/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

//     let Trie = function () {
//         this.data = {};
//         this.groups = [];
//     };
    
//     Trie.prototype.addWord = function(word) {
//         let currentNode = this.data;
//         for (let i = 0; i < word.length; i ++) {
//             if (currentNode[word[i]] === undefined) {
//                 currentNode[word[i]] = {};
//             } 
//             currentNode = currentNode[word[i]];
//         }
//         currentNode.termination = true;
//     }
    
//     Trie.prototype.createGroups = function(char, pathway = this.data) {
//         for (var key in pathway[char]) {
//             if (key === 'termination') {
//                 this.groups.push(this.data)
//             } else {
//                 this.createGroups(key, pathway[char][key])
//             }
//         }
//     }
    
//     Trie.prototype.processGroups = function(char) {
//         for (let i = 0; i < this.groups.length; i ++) {
//             if (this.groups[i][char].terminated === true) {
//                 this.groups[i] = this.data;
//             } else if ()
//         }
//         this.groups.forEach((group)=> {
            
//         })
//     }
    
//     let myTRIE = new Trie();
//     wordDict.forEach((item)=> {
//         myTRIE.addWord(item)
//     });
    
//     let groupCount = myTRIE.createGroups(s[0]);
    
    let hash = {};
    wordDict.forEach((word)=>{
        hash[word]=1;
    })
    
    let storeWhatDoesnotWork = {};
    
    let recurser = (index) => {
        if (index === s.length) {
            return true;
        }
        for (let i = index; i < s.length; i ++) {
            let word = s.slice(index, i + 1);
            let hashResult = hash[word];
            if (hashResult != undefined && storeWhatDoesnotWork[word + '-' + i] === undefined) {
                if (recurser(i + 1)) {
                    return true;
                } else {
                    storeWhatDoesnotWork[word + '-' + i] = 1;
                }
            }
        }
        return false;
    }
    return recurser(0)
};

