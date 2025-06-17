import { PAGES_CONFIG, ROUTES } from "../../../helpers/constants.js";
import { RoutingUtils } from "../../../helpers/routingUtils.js";
import { Logo } from "../logo/index.js";

const logo = new Logo();
const routingUtils = new RoutingUtils();

const brands = [
  { id: "arcam", value: "Arcam" },
  { id: "revel", value: "Revel" },
  { id: "jbl", value: "JBL" },
  { id: "kimber-kable", value: "Kimber Kable" },
  { id: "mark-levinson", value: "Mark Levinson" },
  { id: "vogels", value: "Vogel's" },
  { id: "jbl-synthesis", value: "JBL Synthesis" },
  { id: "vivid-storm", value: "Vivid Storm" },
];

export class Header {
  getMobileSideMenu() {
    webix.ui({
      view: "sidemenu",
      id: "menu",
      width: window.innerWidth,
      position: "left",
      state: function (state) {
        var toolbarHeight = $$("top_toolbar").$height;
        state.top = 0;
        state.height += toolbarHeight;
      },
      css: "MobileSideMenu",
      body: {
        rows: [
          {
            css: "MobileSideMenuHeader",
            cols: [
              {
                ...logo.getView("secondary"),
                gravity: 1,
                borderless: true,
              },
              {
                view: "button",
                type: "icon",
                icon: "fa-light fa-xmark",
                width: 40,
                css: "MobileSideMenuCloseButton",
                click: () => $$("menu").hide(),
              },
            ],
          },
          {
            view: "multiview",
            id: "sideMenuMultiview",
            css: "SideMenuMultiview",
            animate: { type: "slide", subtype: "in" },
            cells: [
              {
                id: "sideMenuMainView",
                rows: [
                  {
                    view: "list",
                    borderless: true,
                    scroll: false,
                    css: "SideMenuItems",
                    template:
                      "<div class='SideMenuItemWrapper'>#value# <span class='webix_icon fa-light fa-chevron-right' style='float:right; margin-right:6px;'></span></div>",
                    icon: "bars",
                    data: PAGES_CONFIG.filter((page) => page.inNavbar).map(
                      (page) => ({
                        ...page,
                        id: page.id,
                        value: page.label,
                      })
                    ),
                    select: true,
                    type: {
                      height: 40,
                    },
                    click: function (id) {
                      if (id === "brands") {
                        $$("sideMenuMultiview").setValue("sideMenuBrandsView");
                      } else {
                        const item = this.getItem(id);
                        routingUtils.navigateTo(item.id, true);
                        $$("menu").hide();
                      }
                    },
                  },
                  {},
                  {
                    view: "template",
                    css: "SideMenuFooter",
                    padding: 0,
                    margin: 0,
                    template: `
                    <div class='ContactContainer'>
                      <img src='/assets/icons/headset.svg' alt='ContactIcon' class='ContactIcon'>
                      <div class='ContactDetails'>
                        <div class='PhoneNumber'>0 850 255 06 20</div>
                        <div class='Hours'>Tüm Günler 09.00 - 20.00</div>
                      </div>
                    </div>`,
                  },
                ],
              },
              {
                id: "sideMenuBrandsView",
                css: "SideMenuItems", //global name
                rows: [
                  {
                    view: "template",
                    css: "BackToMainMenuButton",
                    borderless: true,
                    template:
                      "<div class='SideMenuItemWrapper BackToMainMenu'><span class='webix_icon fa-light fa-chevron-left' style='float:left; margin-right:6px;'></span>Markalar</div>",
                    onClick: {
                      BackToMainMenu: function () {
                        $$("sideMenuMultiview").setValue("sideMenuMainView");
                      },
                    },
                  },
                  {
                    id: "BrandsList",
                    view: "list",
                    borderless: true,
                    scroll: "y",
                    css: "SideMenuItems",
                    template:
                      "<div class='SideMenuItemWrapper'>#value# <span class='webix_icon fa-light fa-chevron-right' style='float:right; margin-right:6px;'></span></div>",
                    icon: "bars",
                    data: brands,
                    select: true,
                    type: {
                      height: 40,
                    },
                    click: function (id) {
                      // const item = this.getItem(id);
                      routingUtils.navigateTo("cart", true);
                      $$("menu").hide();
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    });
  }

  getView() {
    this.getMobileSideMenu();
    return {
      view: "toolbar",
      id: "top_toolbar",
      height: 50,
      css: "Header",
      borderless: true,
      cols: [
        {
          id: "mobile_page_selector",
          view: "button",
          type: "icon",
          icon: "fa-light fa-bars",
          css: "MobilePageSelector",
          click: () => {
            if ($$("menu").config.hidden) {
              $$("menu").show();
            } else $$("menu").hide();
          },
        },
        logo.getView(),
        {
          id: "page_selector",
          view: "segmented",
          css: "PageSelector",
          align: "center",
          optionWidth: 100,
          options: PAGES_CONFIG.filter((page) => page.inNavbar).map((page) => ({
            id: page.id,
            value: page.label,
          })),
          on: { onChange: (pageId) => routingUtils.navigateTo(pageId, true) },
        },
        {
          view: "layout",
          css: "HeaderRightSide",
          margin: 0,
          padding: 0,
          cols: [
            {
              view: "template",
              css: "ProfileIcon",
              margin: 0,
              padding: 0,
              template: "<img src='/assets/icons/profile.svg' alt='Profile'>",
              onClick: {
                ProfileIcon: () => routingUtils.navigateTo("profile", true),
              },
            },
            {
              view: "template",
              css: "CartIcon",
              margin: 0,
              padding: 0,
              template: "<img src='/assets/icons/cart.svg' alt='Cart'>",
              onClick: {
                CartIcon: () => routingUtils.navigateTo("cart", true),
              },
            },
          ],
        },
        {
          view: "richselect",
          margin: 0,
          padding: 0,
          name: "language",
          value: "tr",
          css: "LanguageSelect",
          icon: "fa-solid fa-chevron-down",
          suggest: {
            view: "suggest",
            css: "LanguageSelectPopup",
            body: {
              view: "list",
              css: "custom-language-list",
              data: [
                { id: "tr", value: "TR" },
                { id: "en", value: "EN" },
              ],
            },
          },
        },
      ],
    };
  }
}
