import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { getCategoryQna, getKeywordQna, getQna } from "@/API";
import Inquiry from "@/components/QnAPage/Inquiry";
import QnATable from "@/components/QnAPage/QnATable";
import CategoryBar from "@/components/common/CategoryBar";
import Pagination from "@/components/common/Pagination";
import TitleBanner from "@/components/common/TitleBanner";
import { Inner } from "@/style/commonStyle";
import { QnAData } from "@/types";

const categoryList = ["전체", "사용법", "배송", "기기", "기타"];

const QnAPage = () => {
  const [qna, setQna] = useState<QnAData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [category, setCategory] = useState<string>("전체");
  const [keyword, setKeyword] = useState<string>("");

  const fetchQnA = async () => {
    const qnaData = await getQna({ page });
    setQna(qnaData.content);
    setTotalPage(qnaData.totalPages);
  };

  const fetchKeywordQnA = async (keyword: string) => {
    const qnaData = await getKeywordQna({ keyword, page });
    setQna(qnaData.content);
    setTotalPage(qnaData.totalPages);
  };

  const fetchCategoryQnA = async (category: string) => {
    const qnaData = await getCategoryQna({ category, page });
    setQna(qnaData.content);
    setPage(1);
    setTotalPage(qnaData.totalPages);
  };

  useEffect(() => {
    if (keyword !== "") fetchKeywordQnA(keyword);
    else if (category === "전체") fetchQnA();
    else fetchCategoryQnA(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <React.Fragment>
      <Container>
        <Inner>
          <TitleBanner
            title="QnA"
            subTitle="구매하시려는 제품에 대해 궁금한 점이 있으면 문의해주세요."
          />
          <CategoryBar
            categoryList={categoryList}
            category={category}
            keyword={keyword}
            setCategory={setCategory}
            setKeyword={setKeyword}
            setPage={setPage}
            getData={fetchQnA}
            getKeywordData={fetchKeywordQnA}
            getCategoryData={fetchCategoryQnA}
          />
          <QnATable qna={qna} />
          <Pagination
            currentPage={page}
            setCurrentPage={setPage}
            totalPage={totalPage}
          />
        </Inner>
      </Container>
      <Inquiry />
    </React.Fragment>
  );
};

const Container = styled.div`
  padding-top: 123px;
  padding-bottom: 100px;
  min-height: 1200px;
`;

export default QnAPage;
