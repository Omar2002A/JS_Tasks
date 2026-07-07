function randomNumber(num1, num2) {
    let random = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    document.write(random + "<br>");
}

randomNumber(1,4);
randomNumber(10,100);