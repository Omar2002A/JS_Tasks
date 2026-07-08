function minInArray(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    } 
    return min
}

console.log(minInArray([1,2,3,90]));
console.log(minInArray([1,2,3,90,0,8]));

function minInArray_While(arr) {
    let min = arr[0];
    let i = 1; 
    while(i < arr.length) {
        if(arr[i] < min) {
            min = arr[i];
        }
        i++;
    }
    return min;
}

console.log(minInArray_While([1,2,3,90]));
console.log(minInArray_While([1,2,3,90,0,8]));

