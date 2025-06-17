export class Cart {
  getView() {
    return {
      id: "cart",
      rows: [
        {
          view: "template",
          template: `<h1 style="text-align:center; padding: 32px 0;">Sepetim</h1>`,
          height: 2000,
        },
      ],
    };
  }
}
