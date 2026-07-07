function fullname(firstname, lastname) {
    return firstname + " " + lastname;
}

let first = prompt("Enter first name : ");
let second = prompt("Enter second name : ");

document.write(fullname(first, second))