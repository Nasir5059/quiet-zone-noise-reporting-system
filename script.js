document.getElementById("complaintForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    let complaint = {
        id: complaints.length + 1,
        location: document.getElementById("location").value,
        noiseType: document.getElementById("noiseType").value,
        description: document.getElementById("description").value,
        status: "Pending"
    };

    complaints.push(complaint);
    localStorage.setItem("complaints", JSON.stringify(complaints));

    document.getElementById("message").innerText = "Complaint submitted successfully!";
    this.reset();
});
