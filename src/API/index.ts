import axios from "axios";

import { ProductGetResponse } from "@/types";

const baseURL = "https://dev-api.dongahicardi.site";
const client = axios.create({
  baseURL,
});

// 상품 목록 조회
export const getProducts = async () => {
  const response = await client.get<ProductGetResponse>("/items");
  return response.data;
};
