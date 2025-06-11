/* === JS/SERVICES/API.JS === */
window.ApiService = {
    getProducts: function () {
        return new Promise((resolve) => {
            // Simüle edilen gecikme
            setTimeout(() => {
                resolve([
                    { id: 1, name: "Premium Laptop", price: "25,000 TL", category: "Elektronik", image: "💻", description: "Yüksek performanslı gaming laptop. 16GB RAM, RTX 4060, 1TB SSD ile profesyonel işler için mükemmel." },
                    { id: 2, name: "Akıllı Telefon", price: "15,000 TL", category: "Telefon", image: "📱", description: "Son teknoloji kamera sistemi ve uzun pil ömrü. 5G desteği ile her yerde hızlı internet." },
                    { id: 3, name: "Kablosuz Kulaklık", price: "2,500 TL", category: "Aksesuar", image: "🎧", description: "Noise cancelling teknolojisi ile kristal ses kalitesi. 30 saat pil ömrü." },
                    { id: 4, name: "Smart Watch", price: "8,000 TL", category: "Giyilebilir", image: "⌚", description: "Sağlık takibi ve fitness özellikleri içeren akıllı saat. Su geçirmez tasarım." },
                    { id: 5, name: "Bluetooth Speaker", price: "1,200 TL", category: "Ses", image: "🔊", description: "Taşınabilir, su geçirmez, 20 saat pil ömrü. 360 derece surround ses." },
                    { id: 6, name: "Gaming Mouse", price: "750 TL", category: "Aksesuar", image: "🖱️", description: "Professional gaming mouse, RGB lighting, 16000 DPI. Ergonomik tasarım." }
                ]);
            }, 500);
        });
    },

    getProduct: function (id) {
        return new Promise((resolve, reject) => {
            this.getProducts().then(products => {
                const product = products.find(p => p.id == id);
                if (product) {
                    resolve(product);
                } else {
                    reject(new Error('Product not found'));
                }
            });
        });
    }
};