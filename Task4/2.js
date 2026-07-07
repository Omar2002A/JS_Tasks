function calculateDogAge(puppy_age) {
    document.write(`Your doggie in ${7 * puppy_age} years old in dog years.`);
}

let dogAge = Number(prompt("How old are your dog ? "));
calculateDogAge(dogAge);