export interface IHeaderList {
  id: string;
  href: string;
  img: string;
  alt: string;
  label: string;
}
export const headerlist: IHeaderList[] = [
  {
    id: crypto.randomUUID(),
    href: "#",
    img: "/icons/home.svg",
    alt: "home-icon",
    label: "Home",
  },
  {
    id: crypto.randomUUID(),
    href: "#category",
    img: "/icons/apps.svg",
    alt: "category-icon",
    label: "Our category",
  },
  {
    id: crypto.randomUUID(),
    href: "#about",
    img: "/icons/about.svg",
    alt: "about-icon",
    label: "About Us",
  },
  {
    id: crypto.randomUUID(),
    href: "#contact",
    img: "/icons/contact.svg",
    alt: "contact-icon",
    label: "contact Us",
  },
  {
    id: crypto.randomUUID(),
    href: "#faqs",
    img: "/icons/faqs.svg",
    alt: "faqs-icon",
    label: "FAQs",
  },
];

export interface IHeaderAction {
  id: string;
  alt: string;
  icon: string;
}
export const headerAction: IHeaderAction[] = [
  {
    id: crypto.randomUUID(),
    alt: "cart",
    icon: "/icons/cart.svg",
  },
  {
    id: crypto.randomUUID(),
    alt: "notification",
    icon: "/icons/notify.svg",
  },
  {
    id: crypto.randomUUID(),
    alt: "wishlist",
    icon: "/icons/wishlist.svg",
  },
];
