export class About {
  getView() {
    return {
      id: "brands",
      rows: [
        {
          view: "template",
          template: `<h1 style="text-align:center; padding: 32px 0;">Markalar</h1>`,
          height: 2000,
        },
      ],
    };
  }
}
