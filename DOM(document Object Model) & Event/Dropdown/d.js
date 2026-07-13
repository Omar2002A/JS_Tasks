window.onload = function () {

    const countries = document.getElementById("countries");
    const flag = document.getElementById("flag");

    countries.onchange = function () {

        switch (countries.value) {
            case "jordan":
                flag.src = "jordan.png";
                break;

            case "palestine":
                flag.src = "palestine.png";
                break;

            default:
                flag.src = "";
        }

    };

};