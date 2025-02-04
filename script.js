document.addEventListener("DOMContentLoaded", function () {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
        showMainContent(savedUser);
    }
});

function signUp() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (!username || !password) {
        errorMessage.innerText = "Please enter a username and password.";
        return;
    }

    if (localStorage.getItem(username)) {
        errorMessage.innerText = "Username already exists.";
        return;
    }

    localStorage.setItem(username, JSON.stringify({ password }));
    alert("Account created! You can now log in.");
    errorMessage.innerText = "";
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let rememberMe = document.getElementById("rememberMe").checked;
    let errorMessage = document.getElementById("error-message");

    let storedUser = localStorage.getItem(username);
    if (!storedUser) {
        errorMessage.innerText = "User not found.";
        return;
    }

    let userData = JSON.parse(storedUser);
    if (userData.password !== password) {
        errorMessage.innerText = "Incorrect password.";
        return;
    }

    if (rememberMe) {
        localStorage.setItem("loggedInUser", username);
    }

    errorMessage.innerText = "";
    showMainContent(username);
}

function logout() {
    localStorage.removeItem("loggedInUser");
    location.reload();
}

function showMainContent(username) {
    document.getElementById("popup").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("loggedInUser").innerText = username;
}

function goToMain() {
    window.location.href = "main.html";
}
