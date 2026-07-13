window.onload = function () {

    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm");

    let lengthMsg = document.getElementById("lengthMsg");
    let matchMsg = document.getElementById("matchMsg");

    let submitBtn = document.getElementById("submitBtn");

    password.onkeyup = check;
    confirm.onkeyup = check;

    function check() {

        if (password.value.length < 8) {
            lengthMsg.innerHTML = "Too Short";
            lengthMsg.style.color = "red";
        } else {
            lengthMsg.innerHTML = "Good";
            lengthMsg.style.color = "green";
        }

        if (confirm.value === "") {
            matchMsg.innerHTML = "";
            submitBtn.style.display = "none";
            return;
        }

        if (password.value === confirm.value) {
            matchMsg.innerHTML = "Passwords Match";
            matchMsg.style.color = "green";

            if (password.value.length >= 8) {
                submitBtn.style.display = "inline";
            }
        } else {
            matchMsg.innerHTML = "Passwords Do Not Match";
            matchMsg.style.color = "red";
            submitBtn.style.display = "none";
        }
    }
};