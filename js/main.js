//onmouse;

function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}

function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}

// locgia;
function locGia() {
    document.getElementById("locgia").innerHTML = "Bạn đã chọn rồi!";
}

function locTour() {
    // Lấy thông tin người dùng chọn
    let diemKhoiHanh = document.getElementById("selectCity").value;
    let thoiGian = document.getElementById("selectTime").value;
    let giaTu = parseInt(document.getElementById("minPrice").value) || 0;
    let giaDen =
        parseInt(document.getElementById("maxPrice").value) || 999999999;

    // Lấy danh sách tất cả tour
    let danhSachTour = document.querySelectorAll("#tourList .highlight-card");

    // Duyệt từng tour và kiểm tra điều kiện
    let tour, tourKhoiHanh, tourThoiGian, tourGia, duocHien, theHTML;

    danhSachTour.forEach(function (item) {
        tour = item;
        tourKhoiHanh = tour.dataset.khoihanh;
        tourThoiGian = tour.dataset.thoigian;
        tourGia = parseInt(tour.dataset.price);

        duocHien = true;
        if (diemKhoiHanh && tourKhoiHanh !== diemKhoiHanh) duocHien = false;
        if (thoiGian && tourThoiGian !== thoiGian) duocHien = false;
        if (tourGia < giaTu || tourGia > giaDen) duocHien = false;

        theHTML = tour.closest(".col-md-6");
        theHTML.classList.toggle("d-none", !duocHien);
    });
}

function sapXepGia(tangDan) {
    // 1. Lấy khay chứa tất cả tour
    let khay = document.querySelector("#tourList .row");

    // 2. Lấy từng tour trong khay (từng khối .col-md-6)
    let danhSach = Array.from(khay.querySelectorAll(".col-md-6"));

    // 3. Sắp xếp danh sách dựa vào giá
    danhSach.sort(function (tourA, tourB) {
        let theCardA = tourA.querySelector(".highlight-card");
        let theCardB = tourB.querySelector(".highlight-card");

        let giaA = parseInt(theCardA.getAttribute("data-price")) || 0;
        let giaB = parseInt(theCardB.getAttribute("data-price")) || 0;

        return tangDan ? giaA - giaB : giaB - giaA;
    });

    // 4. Gắn lại tour theo thứ tự mới
    danhSach.forEach(function (tour) {
        khay.appendChild(tour);
    });
}

function chuyenTrangTheoThanhPho(oCheckbox) {
    if (oCheckbox.checked) {
        const tenThanhPho = oCheckbox.dataset.city;
        const duongDan = "rowtour_2" + tenThanhPho + ".html";

        if (!window.location.href.includes(duongDan)) {
            window.location.href = duongDan;
        }
    }
}

function showTourNames() {
    const cachDuyet = document.getElementById("cachDuyet").value;
    let result = "Các tour hiện có:\n";

    switch (cachDuyet) {
        case "foreach":
            tourList.forEach((tour) => {
                result += `- ${tour.name}: ${tour.price}đ\n`;
            });
            break;

        case "while":
            let i = 0;
            while (i < tourList.length) {
                result += `- ${tourList[i].name}: ${tourList[i].price}đ\n`;
                i++;
            }
            break;

        default:
            result = "Kiểu duyệt không hợp lệ!";
    }

    alert(result);
}

//JS thông báo khi nhấn button gửi của Contact - Trình Quốc An
document.getElementById("sendContactButton").onclick = function () {
    alert("Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ bạn sau!");
};

//JS thông báo khi nhấn Icon Contact sẽ hiển thị form điền thông tin - Trình Quốc An
const iconContact = document.getElementById("iconContact");
const formContact = document.getElementById("formContact");
const overlay = document.getElementById("overlay");

iconContact.addEventListener("click", function () {
    if (overlay && formContact) {
        overlay.classList.add("show");
        formContact.classList.add("show");
    }
});

overlay.addEventListener("click", function () {
    overlay.classList.remove("show");
    formContact.classList.remove("show");
});

//JS khi nhấn "Đặt tour" sẽ thông báo Đặt tour thành công - Trình Quốc An
const datTour = document.getElementById("datTourButton");
datTour.addEventListener("click", function () {
    alert(
        "Bạn đã đặt tour thành công! Chúng tôi sẽ liên hệ lại với bạn trong vài giờ tới!"
    );
});

//JS khi hover vào ảnh thumb thì sẽ phóng to - Trình Quốc An
function zoomIn(img) {
    img.style.transform = "scale(1.2)";
    img.style.transition = "transform 0.3s ease";
}

function zoomOut(img) {
    img.style.transform = "scale(1)";
}
