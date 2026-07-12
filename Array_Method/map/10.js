function extractFullName (arr) {
    return arr.map(element => {
        return `${element.first} ${element.last}`;
    })
}

console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));