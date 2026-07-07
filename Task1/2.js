let mark = Number(prompt("Enter the mark : "));

if (mark >= 90 && mark <= 100) {
    document.write("Mark = " + mark + "<br>");
    document.write("Grade : A+");
}

else if (mark >= 80 && mark <= 89) {
    document.write("Mark = " + mark + "<br>");
    document.write("Grade : A");
}

else if (mark >= 70 && mark <=79) {
    document.write("Mark = " + mark + "<br>");
    document.write("Grade : B");
}

else if (mark >= 60 && mark <=69) {
    document.write("Mark = " + mark + "<br>");
    document.write("Grade : C")
}

else if (mark >= 50 && mark <= 59) {
    document.write("Mark : " + mark + "<br>");
    document.write("Grade : D")
}

else if (mark < 50) {
        document.write("Mark = " + mark + "<br>");
        document.write("Grade: FAIL");
}

else {
        document.write("Invalid mark");
}