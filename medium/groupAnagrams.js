// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


function checkAna(a, b) {
    // console.log(`a.split('').sort().join() = `, a.split('').sort().join(''))
    if(a.split('').sort().join('') === b.split('').sort().join('')) {
        return true
    }else {
        return false;
    }
 }
var groupAnagrams = function(strs) {
    let b = [];
    if(strs.length === 1) b = [[strs[0]]]
    else {
        strs.forEach((v,i) => {
            if(!b.flat().includes(v))   b.push([v]);
            strs.forEach((v1,i1) => {
                let isAna = false;
                if (i1<=i) return;
                else {
                    if(b.includes(v1)) return;
                    isAna = checkAna(v, v1);
                    if(isAna) {
                        b[b.length-1].push(v1);
                    }
                }
            })

        })
    }
    console.log(b)

};
groupAnagrams(["eat","tea","tan","ate","nat","bat"])