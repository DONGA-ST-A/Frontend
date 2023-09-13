import axios from "axios";

import { GetQnaResponse } from "@/types";

const baseURL = "https://dev-api.dongahicardi.site";
const client = axios.create({
  baseURL,
});

// 조회
export const getQna = async () => {
  const response = await client.get<GetQnaResponse>("/faqs");
  return response.data;
};
