// $(document).ready(function() {
//     // Lấy giá trị username từ query string
//     var urlParams = new URLSearchParams(window.location.search);
//     var usernameValue = urlParams.get('username');

//     // Hoặc lấy giá trị username từ localStorage
//     // var usernameValue = localStorage.getItem('username');

//     // Kiểm tra xem username có tồn tại không
//     if (usernameValue) {
//         // Hiển thị giá trị username trong Welcome Label
//         $("#welcome-label").text("Xin chào " + usernameValue);
//     } else {
//         // Nếu không có username, có thể xử lý tương ứng ở đây
//     }
//     $("#btnLogOut").on('click', function() {
//         window.location.href = "/html/HomePage/homepage.html";
//     })
// });
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
