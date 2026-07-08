function sumArray (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1,2,3,4]));

function sumArray_while (arr) {
    let sum = 0;
    let i = 0;
    while(i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}

console.log(sumArray_while([1,2,3,4]));

