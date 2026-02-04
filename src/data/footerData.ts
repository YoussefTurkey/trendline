export interface IFooterLinks {
  id: string;
  title: string;
  links: string[];
}
export const footerLinks: IFooterLinks[] = [
  {
    id: crypto.randomUUID(),
    title: "Let Us Help",
    links: ["My Account", "FAQs", "Categories", "All Products"],
  },
  {
    id: crypto.randomUUID(),
    title: "Policies",
    links: [
      "Refund Policy",
      "About Us",
      "Cancellation Policy ",
      "Terms and Conditions",
      "Privacy Policy",
    ],
  },
];

export interface IFooterSocial {
  id: string;
  alt: string;
  img: string;
}
export const footerSocial: IFooterSocial[] = [
  {
    id: crypto.randomUUID(),
    alt: "facebook",
    img: "icons/facebook.svg",
  },
  {
    id: crypto.randomUUID(),
    alt: "twitter",
    img: "icons/twitter.svg",
  },
  {
    id: crypto.randomUUID(),
    alt: "instagram",
    img: "icons/instagram.svg",
  },
  {
    id: crypto.randomUUID(),
    alt: "linkedin",
    img: "icons/linkedin.svg",
  },
  {
    id: crypto.randomUUID(),
    alt: "whatsapp",
    img: "icons/whatsapp.svg",
  },
  {
    id: crypto.randomUUID(),
    alt: "telegram",
    img: "icons/telegram.svg",
  },
];

export interface IFooterMobileLink {
  id: string;
  title: string;
  icon: string;
  href: string;
}
export const footerMobileLink: IFooterMobileLink[] = [
  {
    id: crypto.randomUUID(),
    title: "+87 01928491",
    icon: "/icons/phone.svg",
    href: "tel:+87 01928491",
  },
  {
    id: crypto.randomUUID(),
    title: "Named@gmail.com",
    icon: "/icons/mail.svg",
    href: "mailto:named@gmail.com",
  },
  {
    id: crypto.randomUUID(),
    title: "381, cairo, egypt",
    icon: "/icons/location.svg",
    href: "/",
  },
];
