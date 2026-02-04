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
