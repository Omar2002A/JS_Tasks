let count = 0;

function counter() {
    return count++;
}

function resetCounter() {
    let previous = count;
    count = 0;
    return previous + " Counter reset";
}

document.write(counter() + "<br>");     
document.write(counter() + "<br>");     
document.write(counter() + "<br>");     

document.write(resetCounter() + "<br>");

document.write(counter() + "<br>");    
document.write(counter() + "<br>");