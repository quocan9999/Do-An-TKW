document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".subscribe-form form");
    const emailInput = document.getElementById("email");
    const emailBtn = document.getElementById("emailBtn");

    if (form && emailInput) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Ngăn form submit mặc định
            const email = emailInput.value.trim();

            if (email === "") {
                alert("Vui lòng nhập email");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Vui lòng nhập email hợp lệ");
                return;
            }

            alert("Thành công! Khuyến mãi đã được gửi vào email của bạn!");
            emailInput.value = "";
        });
    }

    // Thêm event listener cho button để đảm bảo
    if (emailBtn) {
        emailBtn.addEventListener("click", function (e) {
            e.preventDefault();
            // Trigger form submit event
            if (form) {
                form.dispatchEvent(new Event("submit"));
            }
        });
    }
});
