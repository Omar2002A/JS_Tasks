function isPandigital(number) {

    let string = number.toString()

    for(let i = 0; i < 10; i++) {
        if(!string.includes(i.toString())) {
            return false;
        }
    }

    return true;
}

let number = Number(prompt("Enter a number : "));
document.write(isPandigital(number));