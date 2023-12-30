// home.js
document.addEventListener("DOMContentLoaded", function () {
    var userEmail = localStorage.getItem('userEmail');
    var userData = JSON.parse(localStorage.getItem(userEmail));
    
    if (userData) {
        var userName = userData.name;
        document.getElementById("userName").textContent = userName;
        document.getElementById("logoutButton").addEventListener("click", function () {
            // Clear the stored user email and redirect to the login page
            localStorage.removeItem('userEmail');
            window.location.href = "Index.html";
        });
    } else {
        // If user data is not found, redirect to the login page
        window.location.href = "login.html";
    }
});
