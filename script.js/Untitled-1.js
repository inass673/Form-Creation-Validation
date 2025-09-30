document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Username خاصو يكون على الأقل 3 حروف.");
    }

    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email غير صالح، خاصو يحتوي '@' و '.'");
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("Password خاصو يكون على الأقل 8 حروف.");
    }

    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "✅ التسجيل تم بنجاح!";
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.style.backgroundColor = "#d4edda";
      feedbackDiv.style.border = "1px solid #c3e6cb";
      form.reset();
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.style.backgroundColor = "#ffbaba";
      feedbackDiv.style.border = "1px solid #f5c6cb";
    }
  });
});
