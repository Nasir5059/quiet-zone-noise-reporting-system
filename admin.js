function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "admin123") {
        document.getElementById("loginDiv").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        loadComplaints();
    } else {
        alert("Invalid Credentials");
    }
}

function loadComplaints() {
    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    let table = document.getElementById("complaintTable");
    table.innerHTML = "";

    complaints.forEach((c, index) => {
        let row = table.insertRow();

        row.innerHTML = `
            <td>${c.id}</td>
            <td>${c.location}</td>
            <td>${c.noiseType}</td>
            <td>${c.description}</td>
            <td>${c.status}</td>
            <td>
                <button onclick="updateStatus(${index})">Resolve</button>
            </td>
        `;
    });
}

function updateStatus(index) {
    let complaints = JSON.parse(localStorage.getItem("complaints"));
    complaints[index].status = "Resolved";
    localStorage.setItem("complaints", JSON.stringify(complaints));
    loadComplaints();
}
