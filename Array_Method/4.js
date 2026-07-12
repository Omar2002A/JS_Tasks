function addKeyAndValue(arr, key, value) {
    let result = [];
    arr.forEach(element => {
        element[key] = value;
        result.push(element);
    });
    return result;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));