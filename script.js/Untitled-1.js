document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        // تحقق اسم المستخدم
        if (username.length < 3) {
            isValid = false;
            messages.push("اسم المستخدم خاص يكون على الأقل 3 حروف.");
        }

        // تحقق البريد الإلكتروني
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            messages.push("المرجو إدخال بريد إلكتروني صالح.");
        }

        // تحقق كلمة المرور
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            isValid = false;
            messages.push("كلمة المرور خاصها تكون على الأقل 8 حروف، وتحتوي على أرقام وحروف.");
        }

        // عرض الرسائل
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "تم التسجيل بنجاح!";
            feedbackDiv.className = "success";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.className = "error";
        }
    });
});
