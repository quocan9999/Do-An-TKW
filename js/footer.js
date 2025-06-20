document.addEventListener("footerLoaded", function () {
    const form = document.querySelector(".subscribe-form form");
    const emailInput = document.getElementById("email");

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

            alert("Thành công. Hãy xem khuyến mãi được gửi về email của bạn!");
            emailInput.value = "";
        });
    }
});
