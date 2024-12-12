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
    $("#btnFavorite").on('click', function() {
        alert('Đã thêm vào mục ưa thích thành công');
    })
});
// Lắng nghe sự kiện click trên nút "add-to-cart"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        // Lấy thông tin sản phẩm từ phần tử gần nhất có class "item"
        const productItem = this.closest('.item');
        const productImage = productItem.querySelector('.thumb img').getAttribute('src'); // Thêm dòng này để lấy đường dẫn hình ảnh sản phẩm
        const productName = productItem.querySelector('.down-content h4').innerText;
        const productPrice = productItem.querySelector('.down-content span').innerText;
        

        // Tạo một đối tượng chứa thông tin sản phẩm
        const product = {
            image: productImage, // Thêm đường dẫn hình ảnh vào đối tượng sản phẩm
            name: productName,
            price: productPrice
            
        };
        console.log(product)
        // Lấy danh sách sản phẩm từ Local Storage (nếu có)
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Thêm sản phẩm mới vào danh sách
        cartItems.push(product);

        // Lưu lại danh sách sản phẩm vào Local Storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Thông báo cho người dùng biết sản phẩm đã được thêm vào giỏ hàng
        alert('Sản phẩm đã được thêm vào giỏ hàng.');

        // Hoặc chuyển người dùng đến trang giỏ hàng
        window.location.href = "/html/Cart/Cart.html";
    });
});


