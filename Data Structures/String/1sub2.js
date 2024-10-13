//https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i/


// Un Optimized

let createMap = function(word){
    let wordMap = {};
    for(let i = 0; i<word.length; i++){
        let ch = word.substr(i,1);
        if(Object.keys(wordMap).includes(ch)) wordMap[ch]+=1;
        else wordMap[ch] = 1;
    } 
    return wordMap;
}

var isSubstr = function(newWord, prevMappedWord) {
    console.log('new = ', newWord, ' prev = ', prevMappedWord);
    let flag = true;
    let newWordMap = createMap(newWord);
    for(v in prevMappedWord) {
        if(!newWordMap[v] || prevMappedWord[v] > newWordMap[v]) {
            flag = false;
            break;
        }
    }
    console.log('flag  - ', flag);
    return flag;
}
var validSubstringCount = function(word1, word2) {
    let final = [];
    let length= word2.length;
    let word2map = createMap(word2);
    let firstMatchedWordLength = word1.length;
    for(let j = length; j<=word1.length; j++) {
        for(let i = 0; i<=word1.length-j; i++) {
            let temp  = word1.substr(i,j);
            if(j<=firstMatchedWordLength){
                if(isSubstr(temp, word2map)) {
                    final.push(temp);
                    if(!firstMatchedWordLength) firstMatchedWordLength = temp.length;
                }
            }
            else final.push(temp);
        }
    }
    return final.length;
};




// console.log(validSubstringCount('bcca', 'abc'));
console.log(validSubstringCount('bcccccab', 'abc'));
// console.log(validSubstringCount('abcabc', 'abc'));
// console.log(validSubstringCount('ihijjjjihijjhijijjiiijiihijjiijijhiiijhhjijii', 'ijhjjjjijj'));
