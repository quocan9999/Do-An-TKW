// Form tìm kiếm tour - JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Thiết lập ngày tối thiểu là ngày hiện tại
    const today = new Date().toISOString().split("T")[0];
    const departureDateInput = document.getElementById("departureDate");
    if (departureDateInput) {
        departureDateInput.setAttribute("min", today);
    }

    // Xử lý submit form tìm kiếm
    const searchForm = document.getElementById("searchTourForm");
    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const searchParams = {
                destination: formData.get("destination"),
                departureDate: formData.get("departureDate"),
                duration: formData.get("duration"),
                guests: formData.get("guests"),
            };

            // Log thông tin tìm kiếm
            console.log("Tìm kiếm tour với thông tin:", searchParams);

            // Validation
            if (!searchParams.destination) {
                alert("Vui lòng chọn điểm đến!");
                return;
            }

            if (!searchParams.departureDate) {
                alert("Vui lòng chọn ngày khởi hành!");
                return;
            }

            if (!searchParams.guests || searchParams.guests < 1) {
                alert("Vui lòng nhập số người hợp lệ!");
                return;
            }

            // Lấy tên điểm đến
            const destinationText = document.querySelector(
                "#destination option:checked"
            ).textContent;

            // Hiển thị kết quả tìm kiếm
            showSearchResult(destinationText, searchParams);

            // Ở đây bạn có thể thêm logic:
            // - Gọi API tìm kiếm
            // - Chuyển hướng đến trang kết quả
            // - Lọc danh sách tour hiện tại
        });
    }

    // Hiệu ứng animation cho form khi scroll
    const searchSection = document.querySelector(".search-overlay");
    if (searchSection) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 100) {
                searchSection.style.opacity = "0.95";
            } else {
                searchSection.style.opacity = "1";
            }
        });
    }
});

// Hàm hiển thị kết quả tìm kiếm
function showSearchResult(destinationText, searchParams) {
    const message = `
🔍 KẾT QUẢ TÌM KIẾM:
📍 Điểm đến: ${destinationText}
📅 Ngày đi: ${formatDate(searchParams.departureDate)}
👥 Số người: ${searchParams.guests}
⏰ Thời gian: ${
        searchParams.duration ? searchParams.duration + " ngày" : "Không chọn"
    }

Đang tìm kiếm tour phù hợp...
    `;

    alert(message);
}

// Hàm format ngày
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    };
    return date.toLocaleDateString("vi-VN", options);
}

// Hàm reset form
function resetSearchForm() {
    const form = document.getElementById("searchTourForm");
    if (form) {
        form.reset();
        // Reset ngày về ngày hiện tại
        const today = new Date().toISOString().split("T")[0];
        document.getElementById("departureDate").setAttribute("min", today);
    }
}

// Export functions nếu cần sử dụng ở nơi khác
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        showSearchResult,
        formatDate,
        resetSearchForm,
    };
}
