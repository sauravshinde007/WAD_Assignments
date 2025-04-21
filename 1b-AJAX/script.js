document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form refresh

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    // Save user data to localStorage
    saveToLocalStorage(user);

    // Simulate AJAX Request
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "server.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("User Registered Successfully!");
            window.location.href = "users.html"; // Redirect to users list
        }
    };

    xhr.send(JSON.stringify(user));
});

// Function to store users in Local Storage
function saveToLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Avoid duplicate registrations
    if (users.some(u => u.email === user.email)) {
        alert("Email is already registered!");
        return;
    }
    
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}
