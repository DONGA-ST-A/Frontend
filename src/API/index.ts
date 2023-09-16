import axios from "axios";

import { GetNoticeResponse, GetQnaResponse, NoticeData } from "@/types";
import { ProductGetResponse } from "@/types";

const baseURL = "https://dev-api.dongahicardi.site";
const client = axios.create({
  baseURL,
});

const QNA_SIZE = 5;
export const NOTICE_SIZE = 10;

// QnA 조회
export const getQna = async ({ page }: { page: number }) => {
  const response = await client.get<GetQnaResponse>("/faqs", {
    params: {
      page: page - 1,
      size: QNA_SIZE,
    },
  });
  return response.data;
};

// QnA 키워드 검색 조회
export const getKeywordQna = async ({ keyword, page }: { keyword: string; page: number }) => {
  const response = await client.get<GetQnaResponse>("/faqs/keyword", {
    params: {
      page: page - 1,
      size: QNA_SIZE,
      search: keyword,
    },
  });
  return response.data;
};

// QnA 카테고리 조회
export const getCategoryQna = async ({ category, page }: { category: string; page: number }) => {
  const response = await client.get<GetQnaResponse>("/faqs/category", {
    params: {
      page: page - 1,
      size: QNA_SIZE,
      search: category,
    },
  });
  return response.data;
};

// 상품 목록 조회
export const getProducts = async () => {
  const response = await client.get<ProductGetResponse>("/items");
  return response.data;
};

// 공지사항 조회
export const getNotice = async ({ page }: { page: number }) => {
  const response = await client.get<GetNoticeResponse>("/notices", {
    params: {
      page: page - 1,
      size: NOTICE_SIZE,
    },
  });
  return response.data;
};

// 공지사항 상세 조회
export const getNoticeItem = async ({ id }: { id: number }) => {
  const response = await client.get<NoticeData[]>(`/notices/${id}`);
  return response.data;
};

// 공지사항 키워드 검색 조회
export const getKeywordNotice = async ({ keyword, page }: { keyword: string; page: number }) => {
  const response = await client.get<GetNoticeResponse>("/notices/keyword", {
    params: {
      page: page - 1,
      size: NOTICE_SIZE,
      search: keyword,
    },
  });
  return response.data;
};

// 공지사항 카테고리 조회
export const getCategoryNotice = async ({ category, page }: { category: string; page: number }) => {
  const response = await client.get<GetNoticeResponse>("/notices/category", {
    params: {
      page: page - 1,
      size: NOTICE_SIZE,
      search: category,
    },
  });
  return response.data;
};
