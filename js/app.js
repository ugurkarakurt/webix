/* === WEBIX MULTIVIEW ROUTING - DOĞRU YAKLAŞIM === */
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
                    animate: false,
                    gravity: 1,
                    cells: [
                        HomeView.config(),
                        ProductsView.config(),
                        ProductDetailView.config(),
                        AboutView.config()
                    ],
                },
                FooterComponent.config()
            ],
        });

        // URL routing'i başlat
        this.initRouting();

        console.log('✅ App initialized successfully');
    },

    initRouting: function () {
        // Browser back/forward butonlarını dinle
        window.addEventListener('popstate', (event) => {
            console.log('Popstate event:', event);
            this.handleUrlChange();
        });

        // İlk yükleme - URL'den başlangıç sayfası
        this.handleUrlChange();
    },

    handleUrlChange: function () {
        const path = window.location.pathname;
        const cleanPath = path === '/' ? '' : path.substring(1);

        console.log('Handling URL change:', path, 'cleanPath:', cleanPath);

        // URL routing logic
        if (!cleanPath || cleanPath === '') {
            this.showPage('home');
        } else if (cleanPath === 'products') {
            this.showPage('products');
        } else if (cleanPath.startsWith('product/')) {
            const productId = cleanPath.split('/')[1];
            if (productId) {
                this.showPage('product', productId);
            } else {
                this.showPage('home');
            }
        } else if (cleanPath === 'about') {
            this.showPage('about');
        } else {
            // 404 - redirect to home
            this.navigate('/');
        }
    },

    showPage: function (page, param) {
        this.currentPage = page;

        console.log(`Showing page: ${page}`, param ? `with param: ${param}` : '');

        // Header'ı hemen güncelle - delay yok
        HeaderComponent.updateBackground();
        HeaderComponent.updateActiveButton(page === 'product' ? 'products' : page);

        switch (page) {
            case 'home':
                $$("home_view").show();
                document.title = "TechStore - Ana Sayfa";
                break;

            case 'products':
                $$("products_view").show();
                document.title = "TechStore - Ürünler";

                webix.message({
                    text: "Ürünler yükleniyor...",
                    type: "default",
                    expire: 2000
                });

                ApiService.getProducts().then(products => {
                    if (this.currentPage === 'products') {
                        StateService.setState({ products: products });
                        ProductsView.refreshData(products);
                    }
                }).catch(error => {
                    console.error('Products loading error:', error);
                    webix.message({
                        text: "Ürünler yüklenirken hata oluştu!",
                        type: "error"
                    });
                });
                break;

            case 'product':
                if (param) {
                    const productId = parseInt(param);
                    $$("product_detail_view").show();
                    document.title = `TechStore - Ürün ${productId}`;

                    webix.message({
                        text: "Ürün detayı yükleniyor...",
                        type: "default",
                        expire: 2000
                    });

                    ApiService.getProduct(productId).then(product => {
                        if (this.currentPage === 'product') {
                            StateService.setState({ selectedProduct: productId });
                            ProductDetailView.refreshData(product);
                            document.title = `TechStore - ${product.name}`;
                        }
                    }).catch(error => {
                        console.error('Product loading error:', error);
                        if (this.currentPage === 'product') {
                            ProductDetailView.refreshData(null);
                            webix.message({
                                text: "Ürün bulunamadı!",
                                type: "error"
                            });
                        }
                    });
                }
                break;

            case 'about':
                $$("about_view").show();
                document.title = "TechStore - Hakkımızda";
                break;
        }
    },

    navigate: function (path) {
        console.log('Navigating to:', path);

        // URL'i güncelle ama sayfa yenileme yapma
        if (window.location.pathname !== path) {
            window.history.pushState(null, null, path);
        }

        // Sayfayı göster
        this.handleUrlChange();
    },

    // Geri gitme fonksiyonu - Webix multiview back method
    goBack: function () {
        $$("content").back();
    },

    // Sepete ekleme fonksiyonu
    addToCart: function (productId) {
        const result = StateService.addToCart(productId, 1);

        webix.message({
            text: `Ürün sepete eklendi! Sepet: ${StateService.getCartCount()} ürün`,
            type: "success",
            expire: 3000
        });

        console.log('Product added to cart:', productId, 'Cart:', result);
    }
};

// App'i başlat
webix.ready(function () {
    console.log('Webix ready, starting app...');
    App.init();
});