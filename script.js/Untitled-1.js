document.addEventListener("DOMContentLoaded", function () {
    // الكود كامل هنا
});
const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
form.addEventListener("submit", function(event) {
    event.preventDefault();
});
const username = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();
let isValid = true;
let messages = [];
if (!email.includes("@") || !email.includes(".")) {
    isValid = false;
    messages.push("❌ البريد الإلكتروني غير صحيح");
}
if (password.length < 8) {
    isValid = false;
    messages.push("❌ كلمة السر خاصها تكون 8 حروف على الأقل");
}
feedbackDiv.style.display = "block";

if (isValid) {
    feedbackDiv.textContent = "✅ التسجيل ناجح!";
    feedbackDiv.style.color = "#28a745";
} else {
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
}
