function evenNumberEvenIndex(arr) {
    let arr2 = new Array();
    for(let i = 2; i < arr.length; i+=2) {
        if(arr[i] % 2 == 0) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

console.log(evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1]));