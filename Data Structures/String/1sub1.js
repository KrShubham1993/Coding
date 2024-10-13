//https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i/


// Optimized

let createMap = function(word){
    let wordMap = {};
    for(let i = 0; i<word.length; i++){
        let ch = word.substr(i,1);
        if(Object.keys(wordMap).includes(ch)) wordMap[ch]+=1;
        else wordMap[ch] = 1;
    } 
    return wordMap;
}

/* Algo
    1. if freq is less than required (i.e > 0) the right pointer will increase
    2. if freq is eq or greater left pointer will increase
*/

var validSubstringCount = function(bigWord, smallWord) {
    let high = 0,low = 0;
    let smallWordMap = createMap(smallWord);
    let smallWordCharCount = Object.keys(smallWordMap).reduce((agg,v) => agg+smallWordMap[v], 0);
    let windowMap = {...smallWordMap};
    let windowCharCount = smallWordCharCount;
    let subCount = 0;
    // let currentLetter = bigWord.substr(high, 1);
    while(high < bigWord.length) {
        console.log('high = ', high);
        let currentLetter = bigWord.substr(high, 1);
        console.log('------>  current letter at high = ', currentLetter);
        console.log(`index high = ${bigWord.substring(0,high)}[${currentLetter}]${bigWord.substring(high+1, bigWord.length)}`);
        if(Object.keys(smallWordMap).includes(currentLetter)) {
            // if(windowMap[currentLetter] > 0) { // this condition seems useless
                windowMap[currentLetter] -= 1;
                if(windowMap[currentLetter] >= 0) windowCharCount -= 1;
            // }
        }
        console.log('window map - ', windowMap);
        console.log('window more req character count - ', windowCharCount);
        if(windowCharCount == 0) {
            // windowCharCount <= 0
            console.log("incrementing subCount by ", bigWord.length - high);
            subCount = subCount + (bigWord.length - high);
            console.log("subCount = ", subCount);
            while(windowCharCount == 0) {
                // windowCharCount <= 0
                console.log("------> ------> inside inner loop");
                let currentLetter = bigWord.substr(low, 1);
                console.log('------> ------> current letter at low before incrementing low = ', currentLetter);
                console.log(`index low before incrementing low = ${bigWord.substring(0,low)}[${currentLetter}]${bigWord.substring(low+1, bigWord.length)}`);
                low += 1;
                if(Object.keys(smallWordMap).includes(currentLetter)) {
                    // if(windowMap[currentLetter] < smallWordMap[currentLetter]) { // this condition seems useless
                        windowMap[currentLetter] += 1;
                        if(windowMap[currentLetter] > 0) windowCharCount += 1;
                        else {
                            console.log("------> ------> incrementing subCount by ", bigWord.length - high);
                            subCount += (bigWord.length - high);
                            console.log("------> ------> subCount = ", subCount);
                        }
                    // }
                } else {
                    subCount += (bigWord.length - high);
                    console.log("------> ------> incrementing subCount by ", bigWord.length - high);
                    console.log("------> ------> subCount = ", subCount);
                }
                console.log('------> ------> window map - ', windowMap);
                console.log('------> ------> window character count - ', windowCharCount);
                console.log("\n");
            }
        }
        high += 1;
        console.log("\n\n\n");
    }
    return subCount;
}




// console.log(validSubstringCount('bcca', 'abc'));
// console.log(validSubstringCount('abcabc', 'abc'));
console.log(validSubstringCount('ihijjjjihijjhijijjiiijiihijjiijijhiiijhhjijii', 'ijhjjjjijj'));
// console.log(validSubstringCount('bcccccab', 'abc'));