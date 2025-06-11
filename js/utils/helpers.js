/* === DÜZELTILMIŞ JS/UTILS/HELPERS.JS === */
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

    // Webix message ile loading - artık çok gerekli değil ama utility olarak kalsın
    loadingMessageId: null,

    showLoading: function (text = 'Yükleniyor...') {
        this.loadingMessageId = webix.message({
            text: `<div style="display: inline-block; width: 20px; height: 20px; border: 3px solid #f3f3f3; border-top: 3px solid #667eea; border-radius: 50%; animation: spin 1s linear infinite; margin-right: 10px; vertical-align: middle;"></div> ${text}`,
            type: "default",
            expire: -1
        });
    },

    hideLoading: function () {
        if (this.loadingMessageId) {
            webix.message.hide(this.loadingMessageId);
            this.loadingMessageId = null;
        }
    },

    // Webix success message
    showSuccess: function (text) {
        webix.message({
            text: text,
            type: "success",
            expire: 3000
        });
    },

    // Webix error message
    showError: function (text) {
        webix.message({
            text: text,
            type: "error",
            expire: 4000
        });
    }
};