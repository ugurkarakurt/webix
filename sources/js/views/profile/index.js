export class Profile {
  getView() {
    return {
      id: "profile",
      rows: [
        {
          view: "template",
          template: `<h1 style="text-align:center; padding: 32px 0;">Profil</h1>`,
          height: 2000,
        },
      ],
    };
  }
}
