import axios from "axios";

import { ProductGetResponse, ProductItemGetResponse } from "@/types";

const baseURL = "https://dev-api.dongahicardi.site";
const client = axios.create({
  baseURL,
});

// 상품 목록 조회
export const getProducts = async () => {
  const response = await client.get<ProductGetResponse>("/items");
  return response.data;
};

// 상세 상품 조회 (디테일 페이지)
export const getProductItem = async () => {
  const response = await client.get<ProductItemGetResponse>("/items/1");
  return response.data;
};

// 추가 용품 태그 조회 (디테일 페이지)
export const getAddProductItem = async () => {
  const response = await client.get<ProductGetResponse>("/items/tags?search=추가 용품");
  return response.data;
};
