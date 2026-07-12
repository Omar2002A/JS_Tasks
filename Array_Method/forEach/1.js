function doubleValues(arr) {
    let result = [];
    arr.forEach(element => {
        result.push(element*2);
    });
    return result;
}

console.log(doubleValues([1,2,3]));