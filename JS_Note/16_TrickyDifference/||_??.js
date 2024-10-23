for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
}

/* This expression will assign 0 if charCount[char] is any falsy value, 
    including 0, null, undefined, false, NaN, or an empty string
*/

for (const char of s) {
    charCount[char] = (charCount[char] ?? 0) + 1;
}

/* The nullish coalescing operator (??) only assigns 0, 
    if charCount[char] is null or undefined
*/

 