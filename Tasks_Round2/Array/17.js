function aveArray(arr) {
    let sum = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        count++; 
        // can use size 
    }
    return sum/count;
}

console.log(aveArray([1,2,3,8,9]));

function aveArrayWhile(arr) {
    let sum = 0;
    let count = 0;
    while(count < arr.length) {
        sum += arr[count];
        count++;
    }
    return sum/count;
}

console.log(aveArrayWhile([1,2,3,8,9]));

