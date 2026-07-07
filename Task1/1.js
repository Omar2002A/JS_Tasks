let number1 = Number(prompt("Enter the first number : "));
let operation = prompt("Enter the operation u need ! ");
let number2 = Number(prompt("Enter second number : "));

switch(operation) {
    case "+" :
        console.log(number1 + number2);
        break;
    case "-" :
        console.log(number1 - number2);
        break;
    case "/" :
        console.log(number1 / number2);
        break;
    case "*" :
        console.log(number1 * number2);
        break;
}