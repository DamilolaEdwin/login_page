const email = document.getElementById("email");
const password = document.getElementById("password");

function goToHomepage() {
    if (password.value.length >= 6) {
        window.location.href = "homepage.html";
    } else {
        alert("Password is less than six characters. Re-enter!");
    }
}

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    goToHomepage();
});
