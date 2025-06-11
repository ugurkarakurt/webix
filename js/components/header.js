window.HeaderComponent = {
    config: function () {
        const currentLang = localStorage.getItem('lang') || 'TR';

        return {
            view: "toolbar",
            height: 70,
            css: "header-container",
            cols: [{
                template: `
                    <div class="header-wrapper">
                        <div class="header-left">
                            <div class="header-logo" onclick="App.navigate('/')">
                                LUXURY AUDIO
                            </div>
                        </div>
                        <nav class="header-nav">
                            <button class="nav-btn nav-btn-active" data-page="home" onclick="App.navigate('/')">Ana Sayfa</button>
                            <button class="nav-btn" data-page="products" onclick="App.navigate('/products')">Ürünler</button>
                            <button class="nav-btn" data-page="about" onclick="App.navigate('/about')">Hakkımızda</button>
                        </nav>
                        <div class="header-language">
                            <select id="language-select" onchange="HeaderComponent.changeLanguage(this.value)">
                                <option value="TR" ${currentLang === 'TR' ? 'selected' : ''}>TR</option>
                                <option value="EN" ${currentLang === 'EN' ? 'selected' : ''}>EN</option>
                            </select>
                        </div>
                    </div>
                `,
                borderless: true,
                on: {
                    onAfterRender: function () {
                        // İlk render'da hemen arka planı ayarla
                        HeaderComponent.updateBackground();
                    }
                }
            }]
        };
    },

    updateActiveButton: function (currentPage) {
        // Delay'i azalttık - daha hızlı tepki
        setTimeout(() => {
            const buttons = document.querySelectorAll('.nav-btn');
            buttons.forEach(btn => {
                btn.classList.remove('nav-btn-active');
                if (btn.getAttribute('data-page') === currentPage) {
                    btn.classList.add('nav-btn-active');
                }
            });
        }, 50);
    },

    // Optimize edilmiş background update
    updateBackground: function () {
        // İki farklı timing ile kontrol - daha stabil
        this._updateBg();
        setTimeout(() => this._updateBg(), 10);
    },

    _updateBg: function () {
        const wrapper = document.querySelector(".header-wrapper");
        if (wrapper) {
            const isHomePage = window.location.pathname === "/" || window.location.pathname === "";

            if (isHomePage) {
                wrapper.classList.remove("header-bg");
            } else {
                wrapper.classList.add("header-bg");
            }
        }
    },

    changeLanguage: function (lang) {
        localStorage.setItem('lang', lang);
        location.reload();
    }
};