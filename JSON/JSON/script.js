const table = document.getElementById("table");
const click = document.getElementById("title");

click.addEventListener("click", function() {
    table.style.display = "block";
});

click.addEventListener("dblclick", function() {
    table.style.display = "none";
});

const data = JSON.parse(jsonObject);
const array = data.users;
array.forEach(element => {
    table.innerHTML += `
    <tr>
    <td>${element.firstName}</td>
    <td>${element.phone}</td>
    <td>${element.email}</td>
    </tr>
    `;
});