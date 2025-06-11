/* === JS/VIEWS/ABOUT.JS === */
window.AboutView = {
    config: function () {
        return {
            id: "about_view",
            template: `
                <div class="page-wrapper">
                    <div class="about-container">
                        <h1 class="page-title">Hakkımızda</h1>
                        <div class="about-card">
                            <div class="about-section">
                                <h2>TechStore Kimdir?</h2>
                                <p style="margin-bottom: 30px;">
                                    2020 yılında kurulan TechStore, teknoloji tutkunlarına en kaliteli ürünleri en uygun fiyatlarla sunma 
                                    misyonuyla yola çıktı. Müşteri memnuniyetini her şeyin üstünde tutarak, güvenilir ve hızlı hizmet 
                                    anlayışımızla sektörde fark yaratıyoruz.
                                </p>
                                
                                <h3>Vizyonumuz</h3>
                                <p style="margin-bottom: 30px;">
                                    Türkiye'nin en güvenilir teknoloji platformu olmak ve her bütçeye uygun kaliteli ürünlerle 
                                    teknolojiye erişimi demokratikleştirmek. Gelecekte yapay zeka destekli kişiselleştirilmiş 
                                    alışveriş deneyimi sunmayı hedefliyoruz.
                                </p>
                                
                                <h3>Değerlerimiz</h3>
                                <ul style="margin-bottom: 30px;">
                                    <li>Müşteri odaklılık ve memnuniyet</li>
                                    <li>Kalite ve güvenilirlik</li>
                                    <li>Yenilikçi yaklaşım ve sürekli gelişim</li>
                                    <li>Sürdürülebilirlik ve çevre bilinci</li>
                                    <li>Şeffaflık ve dürüstlük</li>
                                </ul>
                                
                                <h3>Rakamlarla TechStore</h3>
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
                                    <div style="text-align: center; padding: 20px;">
                                        <div style="font-size: 2rem; font-weight: bold; color: #667eea;">50,000+</div>
                                        <div style="color: #6c757d;">Mutlu Müşteri</div>
                                    </div>
                                    <div style="text-align: center; padding: 20px;">
                                        <div style="font-size: 2rem; font-weight: bold; color: #667eea;">1,200+</div>
                                        <div style="color: #6c757d;">Ürün Çeşidi</div>
                                    </div>
                                    <div style="text-align: center; padding: 20px;">
                                        <div style="font-size: 2rem; font-weight: bold; color: #667eea;">4.8/5</div>
                                        <div style="color: #6c757d;">Müşteri Puanı</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        };
    }
};