/* === DÜZELTILMIŞ JS/VIEWS/PRODUCTS.JS === */
window.ProductsView = {
    config: function () {
        return {
            id: "products_view",
            rows: [
                {
                    template: `<h1 class="page-title">Ürünlerimiz</h1>`,
                    height: 150,
                    borderless: true
                },
                {
                    view: "template",
                    id: "products_template",
                    template: this.getEmptyTemplate(),
                    scroll: "auto",
                    borderless: true
                }
            ]
        };
    },

    getEmptyTemplate: function () {
        return `
            <div class="products-section">
                <div class="products-grid">
                    <div style="text-align: center; padding: 60px; color: #6c757d;">
                        <div style="font-size: 3rem; margin-bottom: 20px;">📦</div>
                        <h3>Ürünler yükleniyor...</h3>
                    </div>
                </div>
            </div>
        `;
    },

    getProductsTemplate: function (products) {
        if (!products || products.length === 0) {
            return `
                <div class="products-section">
                    <div class="products-grid">
                        <div style="text-align: center; padding: 60px; color: #6c757d;">
                            <div style="font-size: 3rem; margin-bottom: 20px;">😕</div>
                            <h3>Henüz ürün bulunmuyor</h3>
                        </div>
                    </div>
                </div>
            `;
        }

        const productsHtml = products.map(product => `
            <div class="product-card" onclick="App.navigate('/product/${product.id}')">
                <div class="product-image">${product.image}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-category">${product.category}</div>
                <div class="product-price">${product.price}</div>
            </div>
        `).join('');

        return `
            <div class="products-section">
                <div class="products-grid">
                    ${productsHtml}
                </div>
            </div>
        `;
    },

    refreshData: function (products) {
        const template = $$("products_template");
        if (template) {
            template.setHTML(this.getProductsTemplate(products));
        }
    }
};