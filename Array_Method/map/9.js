function extractKey(arr) {
    return arr.map(element => {
        return element.name;
    })
}

console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
)