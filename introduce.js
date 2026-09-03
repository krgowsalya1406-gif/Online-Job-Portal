document.getElementById("introForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    const education = document.querySelector('input[name="education"]:checked');
    if (!education) {
        alert("Please select your education.");
        return;
    }

    const work = document.querySelector('input[name="work"]:checked');
    if (!work) {
        alert("Please select your work experience.");
        return;
    }

    // Go to the next page
    window.location.href = "location.html";
});