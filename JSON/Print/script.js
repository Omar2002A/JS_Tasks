window.onload = function() {
    const form = document.getElementById("printForm");
    const tbody = document.querySelector("#userTable tbody");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("mobile").value.trim();

        const user = {
            name,
            email,
            phone
        };

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        tbody.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
        </tr>
        `;

        form.reset();
    });
}