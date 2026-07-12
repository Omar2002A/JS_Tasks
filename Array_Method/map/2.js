function stringItUp(arr) {
    const result = arr.map(element => {
        return element.toString();
    })
    return result;
}

console.log(stringItUp([2, 5, 100]));