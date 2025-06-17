export class About {
  getView() {
    return {
      id: "contact",
      rows: [
        {
          view: "template",
          css: "PageContainer",
          template: `<h1 style="text-align:center; padding: 32px 0;">İletişim</h1>`,
          height: 2000,
        },
      ],
    };
  }
}
