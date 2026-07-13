window.onload = function () {

    let btn = document.getElementById("toggleBtn");
    let content = document.getElementById("content");

    btn.onclick = function () {

        if (content.style.display == "none") {
            content.style.display = "block";
            btn.innerHTML = "Hide";
        } else {
            content.style.display = "none";
            btn.innerHTML = "Show";
        }

    };

};