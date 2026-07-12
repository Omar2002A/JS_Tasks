function showFirstAndLast(arr) {
    let result = [];
    arr.forEach(element => {
        let first = element.at(0);
        let last = element.at(-1);
        let str = `${first}${last}`;
        result.push(str);
    });
    return result;
}

console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));