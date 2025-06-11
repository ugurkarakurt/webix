/* === JS/COMPONENTS/FOOTER.JS === */
window.FooterComponent = {
    config: function () {
        return {
            view: "toolbar",
            height: 80,
            css: "webix_dark",
            cols: [{
                template: `
                    <div style="padding: 20px; color: white;">
                        <div class="footer-content">
                            <div class="footer-section">
                                <div style="font-size: 18px; font-weight: bold; margin-bottom: 5px; cursor: pointer;" onclick="App.navigate('/')">🛍️ TechStore</div>
                                <div style="font-size: 12px; opacity: 0.8;">En kaliteli teknoloji ürünleri</div>
                            </div>
                            
                            <div class="footer-section" style="text-align: center;">
                                <div class="footer-links">
                                    <a href="javascript:void(0)" onclick="App.navigate('/')">Ana Sayfa</a>
                                    <a href="javascript:void(0)" onclick="App.navigate('/products')">Ürünler</a>
                                    <a href="javascript:void(0)" onclick="App.navigate('/about')">Hakkımızda</a>
                                </div>
                                <div style="font-size: 12px; opacity: 0.7;">© 2025 TechStore. Tüm hakları saklıdır.</div>
                            </div>
                            
                            <div class="footer-section" style="text-align: right;">
                                <div style="font-size: 24px; margin-bottom: 5px;">📱 📧 🌐</div>
                                <div style="font-size: 12px; opacity: 0.8;">İletişim & Sosyal Medya</div>
                            </div>
                        </div>
                    </div>
                `,
                borderless: true
            }]
        };
    }
};