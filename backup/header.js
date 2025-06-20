// Chờ khi header được nạp xong rồi mới gắn sự kiện
document.addEventListener("headerLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");
    const supportBox = document.getElementById("supportBox");

    if (toggleBtn && supportBox) {
        toggleBtn.addEventListener("click", function () {
            supportBox.style.display =
                supportBox.style.display === "block" ? "none" : "block";
        });
    }
});
