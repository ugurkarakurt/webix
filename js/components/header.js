/* === JS/COMPONENTS/HEADER.JS === */
window.HeaderComponent = {
    config: function () {
        return {
            view: "toolbar",
            height: 70,
            css: "webix_dark",
            cols: [{
                template: `
                    <div style="display: flex; align-items: center; justify-content: space-between; height: 100%; padding: 0 20px;">
                        <div style="display: flex; align-items: center;">
                            <div style="font-size: 28px; font-weight: bold; color: white; margin-right: 50px; cursor: pointer;" onclick="App.navigate('/')">
                                🛍️ TechStore
                            </div>
                            <nav>
                                <button class="nav-button" data-page="home" onclick="App.navigate('/')">Ana Sayfa</button>
                                <button class="nav-button" data-page="products" onclick="App.navigate('/products')">Ürünler</button>
                                <button class="nav-button" data-page="about" onclick="App.navigate('/about')">Hakkımızda</button>
                            </nav>
                        </div>
                        <div style="color: white; font-size: 14px;">
                            v${AppConfig.version}
                        </div>
                    </div>
                `,
                borderless: true
            }]
        };
    },

    updateActiveButton: function (currentPage) {
        const buttons = document.querySelectorAll('.nav-button');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-page') === currentPage) {
                btn.classList.add('active');
            }
        });
    }
};