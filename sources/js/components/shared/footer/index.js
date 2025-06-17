export class Footer {
  getView() {
    return {
      view: "toolbar",
      height: 60,
      css: "footer-bar",
      borderless: true,
      cols: [
        { width: 20 },
        {
          view: "template",
          template: "© 2025 YourBrand. Tüm hakları saklıdır.",
          css: "footer-text",
          borderless: true,
        },
        {},
        {
          view: "template",
          template: `
              <div style="display: flex; gap: 20px; align-items: center;">
                <a href="#" style="color: #666; text-decoration: none;">Gizlilik</a>
                <a href="#" style="color: #666; text-decoration: none;">Şartlar</a>
                <a href="#" style="color: #666; text-decoration: none;">İletişim</a>
              </div>
            `,
          width: 200,
          borderless: true,
        },
        { width: 20 },
      ],
    };
  }
}
