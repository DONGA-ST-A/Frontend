import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { getCategoryQna, getKeywordQna, getQna } from "@/API";
import Inquiry from "@/components/QnAPage/Inquiry";
import QnACategoryBar from "@/components/QnAPage/QnACategoryBar";
import QnAPagination from "@/components/QnAPage/QnAPagination";
import QnATable from "@/components/QnAPage/QnATable";
import { Inner } from "@/style/commonStyle";
import { QnAData } from "@/types";

const QnAPage = () => {
  const [qna, setQna] = useState<QnAData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  const getQnA = async () => {
    const qnaData = await getQna({ page });
    setQna(qnaData.content);
    setTotalPage(qnaData.totalPages);
    console.log(qna);
    console.log(qnaData);
  };

  const getKeywordQnA = async (keyword: string) => {
    const qnaData = await getKeywordQna({ keyword, page });
    setQna(qnaData.content);
    setPage(1);
    setTotalPage(qnaData.totalPages);
    console.log(qna);
    console.log(qnaData);
  };

  const getCategoryQnA = async (category: string) => {
    const qnaData = await getCategoryQna({ category, page });
    setQna(qnaData.content);
    setPage(1);
    setTotalPage(qnaData.totalPages);
    console.log(qna);
    console.log(qnaData);
  };

  useEffect(() => {
    getQnA();
    console.log("test");
  }, [page]);

  return (
    <React.Fragment>
      <Container>
        <Inner>
          <Banner>
            <h1>QnA</h1>
            <div>구매하시려는 제품에 대해 궁금한 점이 있으면 문의해주세요.</div>
          </Banner>
          <QnACategoryBar
            getKeywordQnA={getKeywordQnA}
            getCategoryQnA={getCategoryQnA}
          />
          <QnATable qna={qna} />
          <QnAPagination
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
`;

const Banner = styled.div`
  padding-bottom: 33px;

  h1 {
    font-family: NotoSansBold;
    font-size: var(--text_title1);
    color: var(color_font);
    margin-bottom: 40px;
  }

  div {
    font-family: NotoSansMedium;
    font-size: var(--text_body1);
    color: var(--color_sub3);
  }
`;

export default QnAPage;
