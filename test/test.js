function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Lọc ra những sản phẩm có id khác với sản phẩm cần xóa
    cart = cart.filter(product => product.id !== productId);

    // Lưu giỏ hàng mới vào Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Cập nhật giao diện người dùng
    updateCartUI();
}
function updateCartUI() {
    // Cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện người dùng
    let cartCountElement = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCountElement.textContent = cart.length.toString();

    // Các bước cập nhật giao diện khác nếu cần thiết
}
removeFromCart(productId);
