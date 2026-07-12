function vowelCount(str) {
    let arr = str.toLowerCase().split("");
    let vowel = ['i','a','o','u','e'];
    let obj = {};
    arr.forEach(element => {
       if (vowel.includes(element)) {
        if(obj[element]){
            obj[element]++;
        }
        else{
            obj[element] = 1;
        }
       } 
    });
    return obj;
}

console.log(vowelCount('HiIIIIII how are u?'));