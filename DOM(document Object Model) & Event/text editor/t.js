window.onload = function () {

    document.getElementById("bold").onclick = function () {
        document.execCommand("bold");
    };

    document.getElementById("underline").onclick = function () {
        document.execCommand("underline");
    };

    document.getElementById("font").onchange = function () {
        document.execCommand("fontName", false, this.value);
    };

    document.getElementById("size").onchange = function () {
        document.execCommand("fontSize", false, this.value);
    };

};