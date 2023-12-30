function signup() {
    // Get input values
    var Uemail = document.getElementById("email").value;
    var Uname = document.getElementById("name").value;
    var Upassword = document.getElementById("password").value;
    

    // Validate email format
    if (!validateEmail(Uemail)) {
        displayMessage("Invalid email format.");
        return;
    }

    // Store signup data in local storage
    var userData = { 
        email: Uemail, 
        password: Upassword, 
        name: Uname };
    localStorage.setItem(Uemail, JSON.stringify(userData));

    // Optionally, you can redirect to a success page or display a message
    window.location.href = "Index.html";
}
function validateEmail(email) {
    // Basic email format validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}