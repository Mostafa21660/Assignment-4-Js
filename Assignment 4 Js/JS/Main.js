function login() {
    // Get input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validate email format
    if (!validateEmail(email)) {
        displayMessage("Invalid email format.");
        return;
    }

    // Check login credentials
    var storedUserData = JSON.parse(localStorage.getItem(email));

    if (storedUserData && password === storedUserData.password) {
        // Redirect to home.html upon successful login
        localStorage.setItem('userEmail', email);
        window.location.href = "home.html";
    } else {
        displayMessage("Incorrect email or password.");
    }
}

function validateEmail(email) {
    // Basic email format validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayMessage(message) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
}
