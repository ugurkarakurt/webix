window.HomeView = {
    config: function () {
        return {
            id: "home_view",
            view: "template",
            template: `
                    <div class="page-wrapper">
                        <div class="hero-section">
                            <div class="hero-media-container">
                            <video
                                autoplay
                                muted
                                loop
                                playsinline
                            >
                                <source src="assets/videos/hero.mp4" type="video/mp4" />
                                Tarayıcınız video öğesini desteklemiyor.
                            </video>
                            <div class="overlay"></div>
                            </div>

                            <div class="hero-content">
                            <div class="hero-title">JBL</div>
                            <div class="hero-subtitle">En kaliteli teknoloji ürünleri burada!</div>
                            <button class="hero-btn" onclick="App.navigate('/products')">
                                Keşfet
                            </button>
                            </div>
                        </div>

                        <div class="features">
                            <h2 style="color: #212529; font-size: 2.5rem; margin-bottom: 20px;">Neden TechStore?</h2>
                            <div class="features-grid">
                            <div class="feature-item">
                                <div class="feature-icon">🚚</div>
                                <h3>Hızlı Teslimat</h3>
                                <p>Aynı gün kargo seçeneği ile siparişiniz kapınızda</p>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">🛡️</div>
                                <h3>Güvenli Alışveriş</h3>
                                <p>256-bit SSL sertifikası ile %100 güvenli ödeme</p>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">💎</div>
                                <h3>Kaliteli Ürünler</h3>
                                <p>Sadece orijinal markalar ve resmi garantili ürünler</p>
                            </div>
                            </div>
                        </div>
                    </div>
      `,
            borderless: true,
            scroll: true,
            autoheight: true
        };
    }
};
