// Show forms
function showLogin() {
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

function showRegister() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
}

// Register user
function register() {
  let username = document.getElementById("regUsername").value;
  let password = document.getElementById("regPassword").value;

  if (!username || !password) {
    document.getElementById("regMsg").innerText = "Please fill all fields";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let exists = users.find(u => u.username === username);

  if (exists) {
    document.getElementById("regMsg").innerText = "User already exists";
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("regMsg").innerText = "Account created successfully!";
  document.getElementById("regMsg").classList.add("success");
}

// Login user
function login() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let validUser = users.find(
    u => u.username === username && u.password === password
  );

  if (validUser) {
    document.getElementById("loginMsg").innerText = "Login successful!";
    document.getElementById("loginMsg").classList.add("success");

    window.location.href = "view-polls.html";
  } else {
    document.getElementById("loginMsg").innerText = "Invalid credentials";
  }
}