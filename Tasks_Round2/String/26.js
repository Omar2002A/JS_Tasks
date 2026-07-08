// Write a function that replaces vowels in a string with their corresponding numbers (a=1, e=2, i=3, o=4, u=5).

function replaceVowels(str) {
    str = str.replaceAll("a", "1");
    str = str.replaceAll("e", "2");
    str = str.replaceAll("i", "3");
    str = str.replaceAll("o", "4");
    str = str.replaceAll("u", "5");
    str = str.replaceAll("A", "1");
    str = str.replaceAll("E", "2");
    str = str.replaceAll("I", "3");
    str = str.replaceAll("O", "4");
    str = str.replaceAll("U", "5");
    return str;
}
console.log(replaceVowels("Hello World"));