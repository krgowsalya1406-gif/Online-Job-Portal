document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "") {
        alert("Please enter your Email Address.");
        return;
    }

    if (password === "") {
        alert("Please enter your Password.");
        return;
    }

    // Login successful
    window.location.href = "introduce.html";

});