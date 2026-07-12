function doubleValues(arr) {
    const result = arr.map(element => {
        return element*2;
    });
    return result;
}

console.log(doubleValues([-1,-2,-3]));