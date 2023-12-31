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
  image: string;
  BtnText: string;
  BtnLink: string;
}
export interface carouselItemProps extends carouselProps {
  idx: number;
}

export interface LoginData {
  userId: string;
  password: string;
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

export interface DetailCategoryProps {
  category: string;
  location: number;
}
export interface GetDto<T> {
  content: T[];
  hasNextPages: boolean;
  numberOfElements: number;
  pageNumber: number;
  totalElements: number;
  totalPages: number;
}

export interface QnAData {
  answer: string;
  category: string;
  id: number;
  question: string;
}

export type GetQnaResponse = GetDto<QnAData>;

export interface UsingGif {
  img: string;
  gif: string;
  text: string;
  subText?: string;
}

/** notice */
export interface NoticeData {
  id: number;
  category: string;
  title: string;
  content: string;
  file: string | null;
  isTop: boolean;
  createdDate: string;
  views: number;
}

export type GetNoticeResponse = GetDto<NoticeData>;
