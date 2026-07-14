window.onload = function() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    // Read users from Local Storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    /* ---------------- Register ---------------- */

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Check if email already exists
        const exists = users.find(user => user.email === email);

        if (exists) {
            alert("This email is already registered!");
            return;
        }

        const user = {
            firstName,
            lastName,
            email,
            password
        };

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration Successful!");

        registerForm.reset();

    });

    /* ---------------- Login ---------------- */

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const user = users.find(function(user){
            return user.email === email && user.password === password;
        });

        if(user){

            message.style.color = "green";
            message.innerText = `Welcome ${user.firstName} ${user.lastName}`;

        }else{

            message.style.color = "red";
            message.innerText = "Invalid Email or Password";

        }

        loginForm.reset();

    });
}