function findLongestWord(str) {
    let arr = str.split(" ");
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord("Web development is fascinating"));