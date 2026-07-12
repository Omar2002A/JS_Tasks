// function capitalizeNames(arr) {
//     const Result = arr.map(element => {
//         let arrName = element.toLowerCase().split("");
//         arrName[0] = arrName[0].toUpperCase();
//         return arrName.join("");
//     })
//     return Result;
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 


function capitalizeNames(arr) {
    return arr.map(element => {
        element = element.toLowerCase();
        return element.charAt(0).toUpperCase() + element.slice(1);
    });
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));