window.onload = function () {
    let p = document.getElementById("Hello");

    p.onmouseover = function () {
        p.style.backgroundColor = "yellow";
        p.style.fontWeight = "bold";
    };

    p.onmouseout = function () {
        p.style.backgroundColor = "";
        p.style.fontWeight = "normal";
    };
};