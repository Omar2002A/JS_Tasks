function scoreInUniversty(mark) {
    if (mark >= 95 && mark <= 100) {
        return document.write("A");
    }
    else if (mark >= 85 && mark <= 94) {
        return document.write("B");
    }
    else if (mark >= 70 && mark <= 84) {
        return document.write("C");
    }
    else if (mark >= 50 && mark <= 69) {
        return document.write("D");
    }
    else if (mark >= 0 && mark <= 49) {
        return document.write("F");
    }
}

scoreInUniversty(71)