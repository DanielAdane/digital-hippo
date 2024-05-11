export const PRODUCT_CATEGORIES = [
  {
    label: "UI kits",
    value: "ui_kits",
    featured: [
      { name: "Editors picks", href: "#", imageSrc: "/nav/ui-kits/mixed.jpg" },
      { name: "New Arrivals", href: "#", imageSrc: "/nav/ui-kits/blue.jpg" },
      { name: "Bestsellers", href: "#", imageSrc: "/nav/ui-kits/purple.jpg" },
    ],
  },
  {
    label: "Icons",
    value: "icons",
    featured: [
      {
        name: "Favorite Icon Picks",
        href: "#",
        imageSrc: "/nav/icons/picks.jpg",
      },
      { name: "New Arrivals", href: "#", imageSrc: "/nav/icons/new.jpg" },
      {
        name: "Bestselling Icons",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
] as const;
