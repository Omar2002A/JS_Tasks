function multiplication2(number1, number2) {
    let result = 0;

    for (let i = 0; i < number2; i++) {
        result += number1;
    }
    return result;
}

document.write(multiplication2(5, 4) + "<br>");
document.write(multiplication2(2, 8) + "<br>");
document.write(multiplication2(7, 6));