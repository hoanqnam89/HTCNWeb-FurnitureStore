$(document).ready(function() {
    var welcomeLabel = $("#welcome-label");

    
    var storedTen = localStorage.getItem('ten');

    
    if (storedTen) {
        welcomeLabel.text("Xin chào " + storedTen);
    } else {
        
    }
});
document.addEventListener('DOMContentLoaded', function() {
    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const allProductItemsCount = document.getElementById('allProductItemsCount');
    const allProductPrice = document.getElementById('allProductPrice');
    
    
    // Khởi tạo biến để tính tổng số sản phẩm và tổng số tiền
    let totalItems = 0;
    let totalPrice = 0;
    
    
    
    // Duyệt qua danh sách sản phẩm và hiển thị thông tin trên trang giỏ hàng
    cartItems.forEach(function(product) {
    
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('row', 'mb-4', 'd-flex', 'justify-content-between', 'align-items-center');
    
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('col-md-2', 'col-lg-2', 'col-xl-2');
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.classList.add('img-fluid', 'rounded-3');
        imageDiv.appendChild(productImage);
        itemDiv.appendChild(imageDiv);
    
        const nameDiv = document.createElement('div');
        nameDiv.classList.add('col-md-3', 'col-lg-3', 'col-xl-3');
        const productName = document.createElement('h6');
        productName.classList.add('text-muted');
        productName.textContent = 'Table';
        const productNameDetail = document.createElement('h6');
        productNameDetail.classList.add('text-black', 'mb-0');
        productNameDetail.textContent = product.name;
        nameDiv.appendChild(productName);
        nameDiv.appendChild(productNameDetail);
        itemDiv.appendChild(nameDiv);
    
        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add('col-md-3', 'col-lg-3', 'col-xl-2', 'd-flex');
        const decreaseButton = document.createElement('button');
        decreaseButton.setAttribute('data-mdb-button-init', '');
        decreaseButton.setAttribute('data-mdb-ripple-init', '');
        decreaseButton.classList.add('btn', 'btn-link', 'px-2');
        decreaseButton.setAttribute('onclick', "this.parentNode.querySelector('input[type=number]').stepDown()");
        decreaseButton.innerHTML = '<i class="fa fa-minus"></i>';
        const quantityInput = document.createElement('input');
        quantityInput.id = 'form1';
        quantityInput.setAttribute('type', 'number');
        quantityInput.setAttribute('min', '0');
        quantityInput.setAttribute('name', 'quantity');
        quantityInput.setAttribute('value', '1');
        quantityInput.classList.add('form-control', 'form-control-sm');
        const increaseButton = document.createElement('button');
        increaseButton.setAttribute('data-mdb-button-init', '');
        increaseButton.setAttribute('data-mdb-ripple-init', '');
        increaseButton.classList.add('btn', 'btn-link', 'px-2');
        increaseButton.setAttribute('onclick', "this.parentNode.querySelector('input[type=number]').stepUp()");
        increaseButton.innerHTML = '<i class="fa fa-plus"></i>';
        quantityDiv.appendChild(decreaseButton);
        quantityDiv.appendChild(quantityInput);
        quantityDiv.appendChild(increaseButton);
        itemDiv.appendChild(quantityDiv);
    
        const priceDiv = document.createElement('div');
        priceDiv.classList.add('col-md-3', 'col-lg-2', 'col-xl-2', 'offset-lg-1');
        const productPrice = document.createElement('h6');
        productPrice.classList.add('mb-0');
        productPrice.textContent = product.price;
        priceDiv.appendChild(productPrice);
        itemDiv.appendChild(priceDiv);
    
        const deleteDiv = document.createElement('div');
        deleteDiv.classList.add('col-md-1', 'col-lg-1', 'col-xl-1', 'text-end');
        const deleteButton = document.createElement('a');
        deleteButton.href = '#!';
        deleteButton.classList.add('text-muted');
        const trashIcon = document.createElement('i');
        trashIcon.classList.add('fa', 'fa-trash');
        deleteButton.appendChild(trashIcon);
        deleteDiv.appendChild(deleteButton);
        itemDiv.appendChild(deleteDiv);
    
        $(document).on('click', '.text-muted', function() {
            let index = $(this).closest('.row').index();
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            $(this).closest('.row').remove();
        });

        totalItems += 1; 
        totalPrice += parseFloat(product.price); 
    
        cartItemsContainer.appendChild(itemDiv);
    });
    
    function formatCurrency(amount) {
        return amount.toFixed(6).replace(/\d(?=(\d{3})+$)/g, '$&.') + ' VNĐ';
        
    }
    // Hiển thị tổng số sản phẩm và tổng số tiền
    allProductItemsCount.textContent = 'Số lượng sản phẩm: ' + totalItems;
    allProductPrice.textContent = 'Tổng số tiền: ' + formatCurrency(totalPrice);
    
    
    $("#payBtn").on('click',function() {
        alert('Thanh toán thành công');
    });
    
});
