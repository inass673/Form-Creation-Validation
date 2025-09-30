document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const feedbackDiv = document.getElementById("feedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let messages = [];
    let isValid = true;

    if (username === "") {
      isValid = false;
      messages.push("Username is required");
    }

    if (!email.includes("@")) {
      isValid = false;
      messages.push("Please enter a valid email");
    }

    if (password.length < 6) {
      isValid = false;
      messages.push("Password must be at least 6 characters");
    }

    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
