// تحميل المستخدمين من المتصفح
let users = JSON.parse(localStorage.getItem("users")) || [];

// Register
function register() {
    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let exists = users.find(u => u.username === username);

    if (exists) {
        alert("User already exists");
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful");
}

// Login
function login() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById("message").innerText = "Welcome " + username;
    } else {
        document.getElementById("message").innerText = "Invalid username or password";
    }
}