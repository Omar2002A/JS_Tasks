let str = "hello world";
str = str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(str);
