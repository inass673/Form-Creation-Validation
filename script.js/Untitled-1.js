document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("❌ Username خاص يكون فيه على الأقل 3 حروف.");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("❌ Email غير صحيح، خاصو يحتوي على @ و .");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("❌ Password خاص يكون فيه على الأقل 8 حروف.");
        }

        // Display feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "✅ Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
