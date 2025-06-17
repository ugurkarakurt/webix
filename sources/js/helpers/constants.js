export const ROUTES = {
  "/": "home",
  "/products": "products",
  "/brands": "brands",
  "/stores": "stores",
  "/about": "about",
  "/contact": "contact",
  "/profile": "profile",
  "/cart": "cart",
};

export const PAGES_CONFIG = [
  {
    id: "home",
    label: "Anasayfa",
    inNavbar: false,
    module: () => import("../views/home/index.js"),
  },
  {
    id: "products",
    label: "Ürünler",
    inNavbar: true,
    module: () => import("../views/products/index.js"),
  },
  {
    id: "brands",
    label: "Markalar",
    inNavbar: true,
    module: () => import("../views/brands/index.js"),
  },
  {
    id: "stores",
    label: "Mağazalar",
    inNavbar: true,
    module: () => import("../views/stores/index.js"),
  },
  {
    id: "about",
    label: "Hakkında",
    inNavbar: true,
    module: () => import("../views/about/index.js"),
  },
  {
    id: "contact",
    label: "İletişim",
    inNavbar: true,
    module: () => import("../views/contact/index.js"),
  },
  {
    id: "profile",
    label: "Profile",
    inNavbar: false,
    module: () => import("../views/profile/index.js"),
  },
  {
    id: "cart",
    label: "Cart",
    inNavbar: false,
    module: () => import("../views/cart/index.js"),
  },
];
