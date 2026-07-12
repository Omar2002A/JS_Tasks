function onlyEvenValues(arr) {
    let result = [];
    arr.forEach(element => {
        if (element % 2 === 0) {
            result.push(element);
        }
    });
    return result;
}

console.log(onlyEvenValues([1,2,3,4,5,6]))