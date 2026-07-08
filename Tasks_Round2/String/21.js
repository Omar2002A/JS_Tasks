let str1 = "listen";
let str2 = "silent";
let arr1 = str1.split("").sort().join("");
let arr2 = str2.split("").sort().join("");
console.log(arr1 === arr2);