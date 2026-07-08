function powerElementIndex(arr) {
    let arr2 = a=new Array();
    for(let i = 0; i < arr.length; i++) {
        arr2.push(arr[i]**i);
    }
    return arr2;
}

console.log(powerElementIndex([7,2,3,4,5,6,7,8]));