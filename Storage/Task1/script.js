window.onload = function() {
    const form = document.getElementById("userForm");
const cardsContainer = document.getElementById("cardsContainer");

let users = JSON.parse(localStorage.getItem("users")) || [];

renderCards();

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const description = document.getElementById("description").value;
    const major = document.getElementById("major").value;

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;

    const languages = [];

    document
        .querySelectorAll('.languages input[type="checkbox"]:checked')
        .forEach(lang => {
            languages.push(lang.value);
        });

    const user = {
        name,
        age,
        gender,
        description,
        major,
        languages
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    renderCards();

    form.reset();

});

function renderCards() {

    cardsContainer.innerHTML = "";

    users.forEach(user => {

        cardsContainer.innerHTML += `
        
        <div class="card">
            <h2>${user.name}</h2>

            <p><strong>Age:</strong> ${user.age}</p>

            <p><strong>Gender:</strong> ${user.gender}</p>

            <p><strong>Description:</strong><br>${user.description}</p>

            <p><strong>Major:</strong> ${user.major}</p>

            <p><strong>Languages:</strong> ${user.languages.join(", ")}</p>
        </div>

        `;

    });

}
}