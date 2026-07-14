window.onload = function() {
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const birthDate = document.getElementById("birthDate").value;
        const email = document.getElementById("email").value.trim();
        const confirmEmail = document.getElementById("emailConfirmation").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("passwordConfirmation").value;
        const mobileNumber = document.getElementById("mobile").value.trim();

        const nameRegex = /^[A-Za-z]+$/;
        if(!nameRegex.test(firstName)) {
            alert("first name must contain letters only !");
            return;
        }
        if(!nameRegex.test(lastName)) {
            alert("last name must contain letters only !");
            return;
        }
        if(birthDate === "") {
            alert("please select your birth date !");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        try {
            if(!emailRegex.test(email)) {
            throw new Error("invalid email format");
            }
        }
        catch (err) {
            alert(err.message);
            return;
        }
        
        if(!emailRegex.test(confirmEmail)) {
            alert("email do not match !");
            return;
        }

        if(!/^[A-Z]/.test(password)) {
            alert("password must start with a capital letter !");
            return;
        }

        const numbers = password.match(/\d/g);
        if(!numbers || password.length < 2) {
            alert("password must contain at least two numbers !");
            return;
        }

        if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            alert("password must contain one special character !");
            return;
        }

        if(password.length < 8 || password.length > 32) {
            alert("password length must be between 8 and 32 !");
            return;
        }

        if(password !== confirmPassword) {
            alert("passwords do not match !");
            return;
        }

        if(!/^\d{10}$/.test(mobileNumber)) {
            alert("mobile number must contain exactly 10 digits !");
            return;
        };

        alert("Registration Successful!");
    });
}