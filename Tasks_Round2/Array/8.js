function middleOfArray(arr) {
    let size = arr.length;
    if (size % 2 == 0) {
        let mid = size / 2;
        return document.write(arr[mid - 1] + " " + arr[mid] + "<br>");
    }
    else {
        let mid = (size / 2) - 0.5;
        return document.write(arr[mid] + "<br>");
    }
}

middleOfArray([1,4,5])
middleOfArray(["t","u","g","x"])