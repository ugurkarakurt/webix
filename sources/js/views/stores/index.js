export class About {
  getView() {
    return {
      id: "stores",
      rows: [
        {
          view: "template",
          template: `<h1 style="text-align:center; padding: 32px 0;">Mağazalar</h1>`,
          height: 2000,
        },
      ],
    };
  }
}
