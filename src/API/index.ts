import axios from "axios";

import { GetQnaResponse } from "@/types";
import { ProductGetResponse } from "@/types";

const baseURL = "https://dev-api.dongahicardi.site";
const client = axios.create({
  baseURL,
});

// QnA 조회
export const getQna = async ({ page }: { page: number }) => {
  const response = await client.get<GetQnaResponse>("/faqs", {
    params: {
      page: page - 1,
      size: 5,
    },
  });
  return response.data;
};

// QnA 키워드 검색 조회
export const getKeywordQna = async ({ keyword, page }: { keyword: string; page: number }) => {
  const response = await client.get<GetQnaResponse>("/faqs/keyword", {
    params: {
      page: page - 1,
      size: 5,
      search: keyword,
    },
  });
  return response.data;
};

// 상품 목록 조회
export const getProducts = async () => {
  const response = await client.get<ProductGetResponse>("/items");
  return response.data;
};
