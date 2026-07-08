function reverseWordsOrder(str) {
    let arr = str.split(" ");
    let reversedArr = arr.reverse();
    return reversedArr.join(" ");
}
console.log(reverseWordsOrder("The quick brown fox"));