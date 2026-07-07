function longString(str1, str2, str3, str4) {
    let longest = str1;

    if (str2.length > longest.length) {
        longest = str2;
    }

    if (str3.length > longest.length) {
        longest = str3;
    }

    if (str4.length > longest.length) {
        longest = str4;
    }

    return document.write(longest + "<br>");
}

longString("air","school","car","by")

longString("air","tr","car","github")

longString("by","tr","air","github")

longString("air","by","car","github")

longString("air","tr","by","car")

longString("air","tr","car","github")

