function oddArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            arr.splice(i,1);
        }
    } 
    return arr;
}

console.log(oddArray([1,2,3,4,5,6,7,8,9]));

function oddArraywhile(arr) {
    let i = 0;
    while(i < arr.length) {
        if(arr[i] % 2 === 0 ) {
            arr.splice(i,1);
        }
        i++;
    }
    return arr;
}

console.log(oddArraywhile([1,2,3,4,5,6,7,8,9]));

