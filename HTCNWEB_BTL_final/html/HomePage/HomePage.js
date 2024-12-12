$(document).ready(function() {
    var ten = $("#txtHoTen");
    var tbTen = $("#tbHoTen");
    var username = $("#txtTaiKhoan");
    var tbUsername = $("#tbTaiKhoan");
    var password = $("#txtPassWord");
    var tbPassWord = $("#tbPassWord");
    var rePassword = $("#txtRePassword");
    var tbRePassWord = $("#tbRePassWord");
    var email = $("#txtEmail");
    var tbEmail = $("#tbEmail");
    var phone = $("#txtPhone");
    var tbPhone = $("#tbPhone");
    var loginUsername = $("#loginTaiKhoan");
    var tbLoginUsername = $("#tbTaiKhoanLogin");
    var loginPassWord = $('#loginPassWord');
    var tbPassWordLogin = $("#tbPassWordLogin");
    // var regexHoTen = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var regexPhone = /^[0-9]{10}$/;

    $("#btnRegister").on('click', function() {
        $("#myModal").modal('show');
    });
    $("#btnLogin").on('click', function() {
        $("#myLoginModal").modal('show');
        
    });

    $("#myModal").submit(function(event) {
        event.preventDefault();
    });

    function KiemTraHoTen() {
        
        if(ten.val().trim() === "") {
            tbTen.html("Vui lòng nhập họ tên");
            ten.focus();
            return false;
        }

        // if(!regexHoTen.test(ten.val())) {
        //     tbTen.html("Vui lòng viết hoa chữ cái đầu");
        //     ten.focus();
        //     return false;
        // }

        tbTen.html("");
        return true;
    }
   function KiemTraTaiKhoan() {
    if(username.val().trim() === "") {
        tbUsername.html("Vui lòng nhập tên tài khoản");
        username.focus();
        return false;
    }
    tbUsername.html("");
    return true
   };
   function KiemTraMatKhau() {
    if(password.val().trim() === "") {
        tbPassWord.html("Vui lòng nhập mật khẩu");
        password.focus();
        return false;
    }
    tbPassWord.html("");
    return true;
   }
   function KiemTraNhapLaiMatKhau() {
    if(rePassword.val().trim() === "") {
        tbRePassWord.html("Vui lòng nhập lại mật khẩu");
        rePassword.focus();
        return false;
    }
    tbRePassWord.html("");
    return true;
   }
   function kiemTraEmail() {
    if(email.val().trim() === "") {

        tbEmail.html("Email không được để trống");
        email.focus();
        return false;
    }
    if(!regexEmail.test(email.val())) {
        tbEmail.html("Vui lòng nhập đúng định dạng Email");
        email.focus();
        return false;
    }
    tbEmail.html("");
    return true;
   }
   function KiemTraPhone() {
    var regex = /^[0-9]{10}$/;

    if(phone.val().trim() === "") {
        tbPhone.html("Số điện thoại không được để trống");
        phone.focus();
        return false;
    }

    if(!regexPhone.test(phone.val())) {
        tbPhone.html("Vui lòng nhập đúng định dạng số điện thoại");
        phone.focus();
        return false;
    }
    tbPhone.html("");
    return true;
}

function validate() {
    if (!KiemTraHoTen()) {
        return false;
    }
    if (!KiemTraTaiKhoan()) {
        return false;
    }
    if (!KiemTraMatKhau()) {
        return false;
    }
    if (!KiemTraNhapLaiMatKhau()) {
        return false;
    }
    if (!kiemTraEmail()) {
        return false;
    }
    if (!KiemTraPhone()) {
        return false;
    }
    return true;
};
    $("#btnLuu").on('click', function() {
        if (!validate()) {
            return false;
        }
        $("#myModal").modal('hide');
        alert('Đăng ký thành công');
        
        let taikhoan = username.val().trim();
        let matkhau = password.val().trim();
        let usernameValue = ten.val().trim();
        let emailValue = email.val().trim();
        let phoneValue = phone.val().trim();
        localStorage.setItem('ten', usernameValue);
        localStorage.setItem('matkhau', matkhau);
        localStorage.setItem('email', emailValue);
        localStorage.setItem('phone', phoneValue);
        localStorage.setItem('taikhoan', taikhoan);
        console.log("Giá trị usernameValue:", usernameValue);
        
        //  window.location.href = "/html/IntroducePage/IntroducePage.html?username=" + encodeURIComponent(usernameValue);
    });
    function KiemTraTaiKhoanLogin() {
        if(loginUsername.val().trim() === '') {
            tbLoginUsername.html("Không được để trống");
            loginUsername.focus();
            return false;
        }
        return true;
    }
    function KiemTraMatKhauLogin() {
        if(loginPassWord.val().trim() === '') {
            tbPassWordLogin.html("Không được để trống");
            loginPassWord.focus();
            return false
        }
        return true;
    }
    function validateLogin() {
        if(!KiemTraTaiKhoanLogin()) {
            return false;
        }
        if(!KiemTraMatKhauLogin()) {
            return false
        }
        var storedUsername = localStorage.getItem('taikhoan');
        var storedPassword = localStorage.getItem('matkhau'); // Đây là nơi bạn lưu mật khẩu trong localStorage
        if (loginUsername.val().trim() === storedUsername && loginPassWord.val().trim() === storedPassword) {
            return true; // Đăng nhập thành công nếu tên người dùng và mật khẩu khớp với dữ liệu trong localStorage
        } else {
            alert("Tên người dùng hoặc mật khẩu không đúng.");
            return false;
        }
    }
    $("#btnGo").on('click', function() {
        if(!validateLogin()) {
            return false;
        }
        $("#myLoginModal").modal('hide');
        alert('Đăng nhập thành công');

        var urlParams = new URLSearchParams(window.location.search);
        var usernameValue = urlParams.get('username');
        
        window.location.href = "/html/IntroducePage/IntroducePage.html?username=" + encodeURIComponent(usernameValue);
})
});