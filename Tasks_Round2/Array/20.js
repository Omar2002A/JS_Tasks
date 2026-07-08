function evenIndexOddLength(arr) {
    let arr2 = new Array();
    for(let i = 2; i < arr.length; i+=2) {
        if(arr[i].length % 2 != 0) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

console.log(evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala","hii"]));