/* === JS/APP.JS === */
window.App = {
    currentPage: 'home',

    init: function () {
        console.log('🚀 TechStore App Starting...');

        // State'i yükle
        StateService.loadFromStorage();

        // Ana UI'yi oluştur
        webix.ui({
            container: "app",
            rows: [
                HeaderComponent.config(),
                {
                    view: "multiview",
                    id: "content",
                    cells: [
                        HomeView.config(),
                        ProductsView.config(),
                        ProductDetailView.config(),
                        AboutView.config()
                    ]
                },
                FooterComponent.config()
            ]
        });

        // URL routing'i başlat
        this.initRouting();

        console.log('✅ App initialized successfully');
    },

    initRouting: function () {
        // URL değişikliklerini dinle
        window.addEventListener('popstate', () => {
            this.handleUrlChange();
        });

        // İlk yükleme
        this.handleUrlChange();
    },

    handleUrlChange: function () {
        const path = window.location.pathname;
        const cleanPath = path === '/' ? '' : path.substring(1);

        if (!cleanPath || cleanPath === '') {
            this.showPage('home');
        } else if (cleanPath.startsWith('product/')) {
            const productId = parseInt(cleanPath.split('/')[1]);
            if (productId) {
                this.showPage('product', productId);
            } else {
                this.showPage('home');
            }
        } else if (cleanPath === 'products') {
            this.showPage('products');
        } else if (cleanPath === 'about') {
            this.showPage('about');
        } else {
            this.showPage('home');
        }
    },

    showPage: function (page, productId) {
        this.currentPage = page;
        const content = $$("content");

        switch (page) {
            case 'home':
                content.show("home_view");
                HeaderComponent.updateActiveButton("home");
                break;

            case 'products':
                content.show("products_view");
                HeaderComponent.updateActiveButton("products");
                Utils.showLoading();

                ApiService.getProducts().then(products => {
                    if (this.currentPage === 'products') {
                        StateService.setState({ products: products });
                        ProductsView.refresh(products);
                        Utils.hideLoading();
                    }
                });
                break;

            case 'product':
                if (productId) {
                    content.show("product_detail_view");
                    HeaderComponent.updateActiveButton("products");
                    Utils.showLoading();

                    ApiService.getProduct(productId).then(product => {
                        if (this.currentPage === 'product') {
                            StateService.setState({ selectedProduct: productId });
                            ProductDetailView.refresh(product);
                            Utils.hideLoading();
                        }
                    }).catch(error => {
                        if (this.currentPage === 'product') {
                            ProductDetailView.refresh(null);
                            Utils.hideLoading();
                        }
                    });
                }
                break;

            case 'about':
                content.show("about_view");
                HeaderComponent.updateActiveButton("about");
                break;
        }
    },

    navigate: function (path) {
        // URL'i güncelle
        window.history.pushState(null, null, path);
        // Sayfayı göster
        this.handleUrlChange();
    }
};

// App'i başlat
webix.ready(function () {
    App.init();
});