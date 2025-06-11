/* === JS/VIEWS/PRODUCTS.JS === */
window.ProductsView = {
    config: function () {
        return {
            id: "products_view",
            template: `
                <div class="page-wrapper">
                    <h1 class="page-title">Ürünlerimiz</h1>
                    <div class="products-section">
                        <div class="products-grid" id="products-container">
                            <!-- Products will be loaded here -->
                        </div>
                    </div>
                </div>
            `
        };
    },

    refresh: function(products) {
        const container = document.getElementById('products-container');
        if (!container) return;

        const productsHtml = products.map(product => `
            <div class="product-card" onclick="App.navigate('/product/${product.id}')">
                <div class="product-image">${product.image}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-category">${product.category}</div>
                <div class="product-price">${product.price}</div>
            </div>
        `).join('');

        container.innerHTML = productsHtml;
    }
};