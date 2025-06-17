import { PAGES_CONFIG } from "../../helpers/constants.js";
import { Footer } from "../../components/shared/footer/index.js";
import { Header } from "../../components/shared/header/index.js";
import { RoutingUtils } from "../../helpers/routingUtils.js";

const headerUI = new Header();
const footerUI = new Footer();
const routingUtils = new RoutingUtils();

export class MainLayout {
  constructor() {
    this.pageInstances = new Map();
    this.scrollListener = null;
  }

  async init() {
    webix.ui({
      id: "main_layout",
      gravity: 1,
      css: "MainLayout",
      rows: [
        headerUI.getView(),
        {
          view: "multiview",
          id: "main_multiview",
          css: "MainMultiview",
          animate: false,
          cells: await this.createPageViews(),
        },
        footerUI.getView(),
      ],
    });

    // Scroll listener'ı başlat
    this.initScrollListener();
    // İlk background güncellemesini yap
    this.updateBackground();
  }

  async getPageInstance(pageId) {
    if (!this.pageInstances.has(pageId)) {
      const pageConfig = PAGES_CONFIG.find((p) => p.id === pageId);
      if (pageConfig) {
        const module = await pageConfig.module();
        const PageClass = module[Object.keys(module)[0]];
        this.pageInstances.set(pageId, new PageClass());
      }
    }
    return this.pageInstances.get(pageId);
  }

  async createPageViews() {
    const views = [];
    for (const pageConfig of PAGES_CONFIG) {
      const pageInstance = await this.getPageInstance(pageConfig.id);
      views.push(pageInstance.getView());
    }
    return views;
  }

  // Header'dan taşınan scroll fonksiyonları
  initScrollListener() {
    if (this.scrollListener) {
      window.removeEventListener("scroll", this.scrollListener);
    }

    this.scrollListener = () => {
      this.updateBackground();
    };

    window.addEventListener("scroll", this.scrollListener, { passive: true });
  }

  updateBackground() {
    this._updateBg();
    setTimeout(() => this._updateBg(), 10);
  }

  _updateBg() {
    const wrapper = document.querySelector(".Header");
    if (wrapper) {
      const scrolled = window.scrollY > 100;

      if (scrolled) {
        wrapper.classList.add("HeaderBackgroundColor");
      } else {
        wrapper.classList.remove("HeaderBackgroundColor");
      }
    }
  }

  destroy() {
    if (this.scrollListener) {
      window.removeEventListener("scroll", this.scrollListener);
      this.scrollListener = null;
    }
  }
}
