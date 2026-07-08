function shorterInArray(arr) {
    let size = arr[0].length;
    let shoreter = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].length < size) {
            size = arr[i].length;
            shoreter = arr[i];
        }
    }
    return shoreter;
}

console.log(shorterInArray(["hala","mercer","madrasa","rd","emad","alex"]))

function shorterInArrayWhile(arr) {
    let size = arr[0].length;
    let shoreter = arr[0];
    let i = 0;
    while (i < arr.length) {
        if(arr[i].length < size) {
            size = arr[i].length;
            shoreter = arr[i];
        }
        i++;
    }
    return shoreter;
}

console.log(shorterInArray(["hala","mercer","madrasa","rd","emad","alex"]))

