import axios from "axios";

import { GetQnaResponse } from "@/types";
import { ProductGetResponse } from "@/types";

const baseURL = "https://dev-api.dongahicardi.site";
const client = axios.create({
  baseURL,
});

const SIZE = 5;

// QnA 조회
export const getQna = async ({ page }: { page: number }) => {
  const response = await client.get<GetQnaResponse>("/faqs", {
    params: {
      page: page - 1,
      size: SIZE,
    },
  });
  return response.data;
};

// QnA 키워드 검색 조회
export const getKeywordQna = async ({ keyword, page }: { keyword: string; page: number }) => {
  const response = await client.get<GetQnaResponse>("/faqs/keyword", {
    params: {
      page: page - 1,
      size: SIZE,
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
      size: SIZE,
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
