import { PAGES_CONFIG, ROUTES } from "./constants.js";

export class RoutingUtils {
  constructor() {
    this.currentPage = "home";
    this.pageInstances = new Map();
    this.initializeRouting();
  }

  initializeRouting() {
    window.addEventListener("popstate", () => this.handleRouteChange());
    this.handleRouteChange();
  }

  navigateTo(pageId, updateUrl = false) {
    if (!this.isValidPage(pageId) || this.currentPage === pageId) return;

    this.currentPage = pageId;

    if (updateUrl) {
      const url = pageId === "home" ? "/" : `/${pageId}`;
      history.pushState({ page: pageId }, "", url);
    }

    this.updateUI(pageId);
    console.log(`Navigated to: ${pageId}`);
  }

  updateUI(pageId) {
    $$("main_multiview").setValue(pageId);
    $$("page_selector").setValue(pageId);
  }

  handleRouteChange() {
    const path = window.location.pathname;
    const pageId = ROUTES[path] || "home";
    this.navigateTo(pageId);
  }

  isValidPage(pageId) {
    return PAGES_CONFIG.some((page) => page.id === pageId);
  }

  getCurrentPage() {
    return this.currentPage;
  }

  goTo(pageId) {
    this.navigateTo(pageId, true);
  }
}
