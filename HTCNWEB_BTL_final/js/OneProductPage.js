$(document).ready(function() {
    var welcomeLabel = $("#welcome-label");

    // Lấy giá trị tên người dùng từ localStorage
    var storedTen = localStorage.getItem('ten');

    // Hiển thị giá trị tên người dùng trong Welcome Label
    if (storedTen) {
        welcomeLabel.text("Xin chào " + storedTen);
    } else {
        // Xử lý tương ứng nếu không có tên người dùng được lưu trong localStorage
    }

});
