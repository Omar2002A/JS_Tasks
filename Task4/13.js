function shorterString(str1, str2, str3, str4, str5) {
    let shortest = str1;

    if (str2.length < shortest.length) {
        shortest = str2;
    }

    if (str3.length < shortest.length) {
        shortest = str3;
    }

    if (str4.length < shortest.length) {
        shortest = str4;
    }

    if (str5.length < shortest.length) {
        shortest = str5;
    }

    return document.write(shortest + "<br>");
}

shorterString("air","school","car","by","github")

shorterString("air","tr","car","by","github")

shorterString("by","tr","car","air","github")

shorterString("air","by","car","school","github")

shorterString("air","tr","by","car","github")

shorterString("air","tr","car","github","by")

