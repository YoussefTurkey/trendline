import { IHeaderAction } from "./headerData";

export interface IProductSlides {
  id: string;
  alt: string;
  img: string;
}
export const productSlides: IProductSlides[] = [
  {
    id: crypto.randomUUID(),
    alt: "product-01",
    img: "/images/young-adult-man-wearing-hoodie-beanie 1.webp",
  },
  {
    id: crypto.randomUUID(),
    alt: "product-02",
    img: "/images/360_F_649571437_eo442p0EwFcdkUOoeocbdi7VKl4VWqRP-removebg-preview.webp",
  },
  {
    id: crypto.randomUUID(),
    alt: "product-03",
    img: "/images/128675430_50654237-removebg-preview.webp",
  },
  {
    id: crypto.randomUUID(),
    alt: "product-04",
    img: "/images/410555708_236d2355-ef94-45ae-b51b-8d4cfb1cdbf5-removebg-preview 1.webp",
  },
];

export const productAction: IHeaderAction[] = [
  {
    id: crypto.randomUUID(),
    alt: "cart",
    icon: "/icons/addCart.svg",
  },
  {
    id: crypto.randomUUID(),
    alt: "wishlist",
    icon: "/icons/wishlist2.svg",
  },
];

export interface ITProductSelect {
  id: string;
  name: string;
}
export const productType: ITProductSelect[] = [
  {
    id: crypto.randomUUID(),
    name: "Cotton",
  },
  {
    id: crypto.randomUUID(),
    name: "Linen",
  },
  {
    id: crypto.randomUUID(),
    name: "Wool",
  },
  {
    id: crypto.randomUUID(),
    name: "Silk",
  },
];
export const productSize: ITProductSelect[] = [
  {
    id: crypto.randomUUID(),
    name: "2xl",
  },
  {
    id: crypto.randomUUID(),
    name: "xl",
  },
  {
    id: crypto.randomUUID(),
    name: "lg",
  },
  {
    id: crypto.randomUUID(),
    name: "md",
  },
  {
    id: crypto.randomUUID(),
    name: "sm",
  },
];

export interface IColors {
  name: string;
  value: string;
}
export const colors: IColors[] = [
  { name: "Red", value: "#E10600" },
  { name: "Sky", value: "#C9D9E6" },
  { name: "Brown", value: "#A18D5B" },
  { name: "Blue", value: "#6F97CE" },
  { name: "Gray", value: "#5A5A5A" },
];

export interface IRatings {
  star: number;
  percent: number;
}
export const ratings: IRatings[] = [
  { star: 5, percent: 67 },
  { star: 4, percent: 15 },
  { star: 3, percent: 6 },
  { star: 2, percent: 3 },
  { star: 1, percent: 9 },
];

export interface IComment {
  id: string;
  name: string;
  msg: string;
  createdAt: string;
}
export const comment: IComment[] = [
  {
    id: crypto.randomUUID(),
    name: "Alex Daewn",
    msg: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    createdAt: "4 months ago",
  },
  {
    id: crypto.randomUUID(),
    name: "Alex Daewn",
    msg: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    createdAt: "4 months ago",
  },
  {
    id: crypto.randomUUID(),
    name: "Alex Daewn",
    msg: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    createdAt: "4 months ago",
  },
  {
    id: crypto.randomUUID(),
    name: "Alex Daewn",
    msg: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    createdAt: "4 months ago",
  },
];

export interface IProductItemImg {
  id: string;
  img: string;
  alt: string;
  offer?: string;
}
export const productItemImg: IProductItemImg[] = [
  {
    id: crypto.randomUUID(),
    img: "/images/61GoUmCw1PL._AC_SX679_-removebg-preview.webp",
    alt: "product-01",
  },
  {
    id: crypto.randomUUID(),
    img: "/images/61K-51VwsL._AC_SX679_-removebg-preview.webp",
    alt: "product-02",
    offer: "25% OFF",
  },
  {
    id: crypto.randomUUID(),
    img: "/images/61rjMSPiDvL._AC_SY879_-removebg-preview.webp",
    alt: "product-03",
  },
  {
    id: crypto.randomUUID(),
    img: "/images/81jorIOyDhL._AC_SX679_-removebg-preview.webp",
    alt: "product-04",
    offer: "25% OFF",
  },
  {
    id: crypto.randomUUID(),
    img: "/images/61GoUmCw1PL._AC_SX679_-removebg-preview.webp",
    alt: "product-01",
  },
  {
    id: crypto.randomUUID(),
    img: "/images/61K-51VwsL._AC_SX679_-removebg-preview.webp",
    alt: "product-02",
    offer: "25% OFF",
  },
  {
    id: crypto.randomUUID(),
    img: "/images/61rjMSPiDvL._AC_SY879_-removebg-preview.webp",
    alt: "product-03",
  },
  {
    id: crypto.randomUUID(),
    img: "/images/81jorIOyDhL._AC_SX679_-removebg-preview.webp",
    alt: "product-04",
    offer: "25% OFF",
  },
];
