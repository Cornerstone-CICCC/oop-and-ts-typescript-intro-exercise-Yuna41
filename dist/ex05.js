"use strict";
// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function countVowels(word) {
    let count = 0;
    const letters = word.toLowerCase().split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < letters.length; i++) {
        if (vowels.includes(letters[i])) {
            count++;
        }
    }
    return count;
}
// Expected output:
console.log(countVowels("hello")); // 2
console.log(countVowels("typescript")); // 2
