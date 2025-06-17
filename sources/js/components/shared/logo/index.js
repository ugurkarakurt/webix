import { RoutingUtils } from "../../../helpers/routingUtils.js";

const routingUtils = new RoutingUtils();
export class Logo {
  getView(variant = "primary") {
    return {
      view: "template",
      css: "Logo",
      margin: 0,
      padding: 0,
      template:
        variant === "primary"
          ? "<img src='/assets/logo-primary.svg' alt='Logo'>"
          : "<img src='/assets/logo-secondary.svg' alt='Logo'>",
      onClick: {
        Logo: () => routingUtils.navigateTo("products", true),
      },
    };
  }
}
