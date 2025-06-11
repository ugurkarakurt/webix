/* === JS/UTILS/HELPERS.JS === */
window.Utils = {
    formatPrice: function (price) {
        return price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    slugify: function (text) {
        return text.toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    },

    loadingMessageId: null,

    showLoading: function () {
        // Önceki loading varsa temizle
        if (this.loadingMessageId) {
            webix.message.hide(this.loadingMessageId);
        }

        this.loadingMessageId = webix.message({
            text: '<div class="loading-spinner"></div> Yükleniyor...',
            type: "default",
            expire: -1
        });
    },

    hideLoading: function () {
        if (this.loadingMessageId) {
            webix.message.hide(this.loadingMessageId);
            this.loadingMessageId = null;
        }
    }
};