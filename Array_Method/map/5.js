function makeStrings(arr) {
    return arr.map(element => {
        if(element.age >= 18) {
            return element.name + " can go to the matrix";
        } else {
            return element.name + " is under the age";
        }
    })
}


console.log(makeStrings([
   {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
]));  