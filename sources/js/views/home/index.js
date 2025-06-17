import { ContactSection } from "../../components/contact/contact-section/index.js";

const contactSectionUI = new ContactSection();
export class Home {
  getView() {
    return {
      id: "home",
      scroll: "y",
      gravity: 1,
      css: "HomePage",
      rows: [
        {
          view: "template",
          template: `<div style="min-height:600px; background:rgba(0,0,0,0.6);"></div>`,
          height: 600,
        },
        contactSectionUI.getView(),
      ],
    };
  }
}
