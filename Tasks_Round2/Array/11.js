function arrayExceptLast(arr) {
    let arr2 = arr.slice(0,-1);
    return arr2;
} 

console.log(arrayExceptLast([1,2,3,4,5,6]));
console.log(arrayExceptLast([1,2,3,4,5,6,5,4,3,0,2,1]));
console.log(arrayExceptLast([1,2,3,4,5,6,67,562,34321,41,134]));