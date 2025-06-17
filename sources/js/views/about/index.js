export class About {
  getView() {
    return {
      id: "about",
      rows: [
        {
          view: "template",
          template: `<h1 style="text-align:center; padding: 32px 0;">Hakkında</h1>`,
          height: 2000,
        },
      ],
    };
  }
}
