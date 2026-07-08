function removeFromArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            arr.splice(i, 1); 
            break;
        }
    }
    return arr;
}

console.log(removeFromArray([1, 2, 3, 8, 9], 8));  
console.log(removeFromArray([5, 7, 5, 9], 5));      
console.log(removeFromArray([1, 2, 3], 10)); 

function removeFromArrayWhile(arr, num) {
    let i = 0;
    while(i < arr.length) {
        if(arr[i] === num) {
            arr.splice(i, 1);
            break;
        }
        i++;
    }
    return arr;
}

console.log(removeFromArrayWhile([1, 2, 3, 8, 9], 8));  
console.log(removeFromArrayWhile([5, 7, 5, 9], 5));      
console.log(removeFromArrayWhile([1, 2, 3], 10)); 