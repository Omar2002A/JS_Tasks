window.onload = function() {
    const registerForm = document.getElementById("registerForm");
    if(registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            const user = {
                firstName,
                lastName,
                email,
                password
            };

            localStorage.setItem("user", JSON.stringify(user));

            document.getElementById("message").textContent = "Registration Successful!";
        });
    }

    // Login!

    const loginForm = document.getElementById("loginForm");
    if(loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const loginEmail = document.getElementById("loginEmail").value.trim();
            const loginPassword = document.getElementById("loginPassword").value;

            const storedUser = JSON.parse(localStorage.getItem("user"));

            if(
                storedUser &&
                storedUser.email === loginEmail && 
                storedUser.password == loginPassword
            ) {
                document.getElementById("loginMessage").textContent = `Welcome ${storedUser.firstName}!`;
            } else {
                document.getElementById("loginMessage").textContent = "Invalid email or password";
            }
        });
    };
}