import axios from "axios";

import { GetQnaResponse } from "@/types";

const baseURL = "https://dev-api.dongahicardi.site";
const client = axios.create({
  baseURL,
});

// QnA 조회
export const getQna = async ({ page }: { page: number }) => {
  const response = await client.get<GetQnaResponse>("/faqs", {
    params: {
      page: page - 1,
    },
  });
  return response.data;
};
