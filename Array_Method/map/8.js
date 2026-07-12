function doubleValues(arr) {
    const result = arr.map((element, idx) => {
        if(element === 0 || idx === 0){
            return 0
        }
        return element*idx;
    });
    return result;
}

console.log(doubleValues([-1,-2,-3]));