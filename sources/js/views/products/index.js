export class About {
  getView() {
    return {
      id: "products",
      scroll: "y",
      gravity: 1,
      rows: [
        {
          view: "template",
          template: `<h1 style="text-align:center; padding: 32px 0;">Ürünler</h1>`,
          height: 2000,
        },
      ],
    };
  }
}
