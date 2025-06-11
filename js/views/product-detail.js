/* === DÜZELTILMIŞ JS/VIEWS/PRODUCT-DETAIL.JS === */
window.ProductDetailView = {
    config: function () {
        return {
            id: "product_detail_view",
            view: "template",
            template: this.getEmptyTemplate(),
            scroll: "auto",
            borderless: true
        };
    },

    getEmptyTemplate: function () {
        return `
            <div class="page-wrapper">
                <div class="container" style="text-align: center; padding: 60px 20px;">
                    <div style="font-size: 3rem; margin-bottom: 20px;">⏳</div>
                    <h2>Ürün detayı yükleniyor...</h2>
                </div>
            </div>
        `;
    },

    getProductTemplate: function (product) {
        if (!product) {
            return `
                <div class="page-wrapper">
                    <div class="container" style="text-align: center; padding: 60px 20px;">
                        <h1 style="color: #dc3545; margin-bottom: 20px;">Ürün Bulunamadı</h1>
                        <p style="color: #6c757d; margin-bottom: 30px; font-size: 1.1rem;">Aradığınız ürün mevcut değil.</p>
                        <button class="hero-btn" onclick="App.navigate('/products')" style="background: #667eea; color: white;">
                            Ürünlere Dön
                        </button>
                    </div>
                </div>
            `;
        }

        return `
            <div class="page-wrapper">
                <div class="container">
                    <button class="back-btn" onclick="App.navigate('/products')">
                        ← Ürünlere Dön
                    </button>
                    <div class="product-detail">
                        <div>
                            <div class="product-detail-image">
                                <div style="font-size: 4rem;">${product.image}</div>
                            </div>
                        </div>
                        <div>
                            <h1 style="color: #212529; margin-bottom: 15px; font-size: 2.5rem;">${product.name}</h1>
                            <div style="color: #667eea; margin-bottom: 25px; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px;">${product.category}</div>
                            <div style="font-size: 2.5rem; font-weight: 700; color: #28a745; margin-bottom: 35px;">${product.price}</div>
                            <p style="color: #6c757d; line-height: 1.8; margin-bottom: 40px; font-size: 1.1rem;">${product.description}</p>
                            <button class="hero-btn" onclick="App.addToCart(${product.id})" style="background: #667eea; color: white; font-size: 1.1rem; padding: 18px 35px;">
                                Sepete Ekle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    refreshData: function (product) {
        const view = $$("product_detail_view");
        if (view) {
            view.setHTML(this.getProductTemplate(product));
        }
    }
};