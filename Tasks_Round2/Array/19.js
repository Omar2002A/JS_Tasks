function repeatChar(str, char) {
    let counter = 0;
    for(let i of str) {
        if(i === char) {
            counter++;
        }
    }
    return counter
}

console.log(repeatChar("hi my name is omar", "i"));