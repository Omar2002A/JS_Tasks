window.onload = function() {
    const projectForm = document.getElementById("projectForm");
    const projectCards = document.getElementById("projectCards");

    let projects = JSON.parse(sessionStorage.getItem("projects")) || [];

    renderProjects();

    projectForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const subject = document.getElementById("subject").value;
        const description = document.getElementById("projectDescription").value;
        const userTypes = document.getElementById("userTypes").value;
        const technology = document.getElementById("technology").value;

        const project = {
            subject,
            description,
            userTypes,
            technology
        };

        projects.push(project);

        sessionStorage.setItem("projects", JSON.stringify(projects));

        renderProjects();

        projectForm.reset();

    });

    function renderProjects() {

        projectCards.innerHTML = "";

        projects.forEach(project => {

            projectCards.innerHTML += `

            <div class="project-card">

                <h2>${project.subject}</h2>

                <p><strong>Description:</strong><br>${project.description}</p>

                <p><strong>User Types:</strong> ${project.userTypes}</p>

                <p><strong>Technology:</strong> ${project.technology}</p>

            </div>

            `;

        });

    }
}