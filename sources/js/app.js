import { MainLayout } from "./views/main/index.js";

// Global MainLayout instance
let mainLayoutUI = null;

const WebixApp = (function () {
  const _eventListeners = function () {};

  return {
    initCore: async function () {
      try {
        mainLayoutUI = new MainLayout();
        await mainLayoutUI.init();

        window.app = mainLayoutUI;

        console.log("Uygulama başarıyla başlatıldı");
      } catch (error) {
        console.error("Uygulama başlatılırken hata:", error);
      }
    },

    // Cleanup metodu
    destroy: function () {
      if (mainLayoutUI) {
        mainLayoutUI.destroy();
        mainLayoutUI = null;
        window.app = null;
      }
    },
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  WebixApp.initCore();
});

// Sayfa kapatılırken cleanup
window.addEventListener("beforeunload", function () {
  WebixApp.destroy();
});

// Browser back/forward butonları için cleanup
window.addEventListener("pagehide", function () {
  WebixApp.destroy();
});
