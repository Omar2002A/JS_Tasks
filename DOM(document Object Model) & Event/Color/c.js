window.onload = function () {

    let box = document.getElementById("box");

let colors = [
    "red",
    "blue",
    "green"
];

let index = 0;

box.onanimationiteration = function () {

    box.style.backgroundColor = colors[index];

    index++;

    if (index == colors.length) {
        index = 0;
    }

};

};