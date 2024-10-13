// var strStr = function(haystack, needle) {
//     let finalIndex = -1;
//     let initialIndex;
//     let matchedSoFar = 0;
//     let toBeMatched = needle.length;
//     haystack.split('').forEach((v,i) => {
//         if(finalIndex === -1) {
//             if(v === needle.substr(matchedSoFar, 1)) {
//                 if(matchedSoFar === 0) initialIndex = i;
//                 matchedSoFar += 1;
//                 toBeMatched -= 1;
//                 if(toBeMatched === 0) {
//                     finalIndex = initialIndex;
//                 }
//             } else {
//                 toBeMatched += matchedSoFar;
//                 matchedSoFar = 0;
//             }
//             console.log(`current element = ${v}, matchedSoFar = ${matchedSoFar}, toBeMatched = ${toBeMatched}`)
//         }
//     });
//     return finalIndex;
// };

var strStr = function(haystack, needle) {
    let index = -1;
    let indices = [];
    haystack.split('').forEach((v,i) => {
        // if(index === -1)
            if(haystack.substring(i, i + needle.length) === needle) {
                index = i;
                indices.push(i);
            }
    });
    return indices;
};
// console.log(strStr('leetcode', 'eeto'));
console.log(strStr('mississippi', 'issi'));