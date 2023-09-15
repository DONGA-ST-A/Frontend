/** Advantage */

export type Position = "upper" | "bottom";

export interface AdvantageProps {
  position: Position;
  title: string;
  description: string;
}

export interface ArrowBtnProps {
  text: string;
  link: string;
}

export interface carouselProps {
  title: string;
  semiTitle: string;
  description: string;
  BtnText: string;
  BtnLink: string;
}

export interface ProductData {
  id: number;
  name: string;
  subname: string;
  tags: string[];
  previewImage: string;
  price: number;
  status: string;
  stock: number;
}
export interface ProductItemGetResponse extends ProductData {
  images: string[];
}

export interface ProductGetResponse {
  content: ProductData[];
  hasNextPages: boolean;
  numberOfElements: number;
  pageNumber: number;
  totalElements: number;
  tatalPages: number;
}
export interface categoryProps {
  img: string;
  text: string;
  location: number;
}

export interface SiteReviewProps {
  title: string;
  description: string;
  example?: string;
}
