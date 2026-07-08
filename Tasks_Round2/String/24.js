// · Question: Write a function that checks if a given string is a palindrome, ignoring case, spaces, and punctuation.

// · Input: "A man, a plan, a canal, Panama!"

// · Expected Output: true

function isPalindrome(str) {
    let arr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return arr === arr.split("").reverse().join("");
}
console.log(isPalindrome("A man, a plan, a canal, Panama!"));