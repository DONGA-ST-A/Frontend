import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { getCategoryNotice, getKeywordNotice, getNotice } from "@/API";
import NoticeTable from "@/components/NoticePage/NoticeTable";
import CategoryBar from "@/components/common/CategoryBar";
import Pagination from "@/components/common/Pagination";
import TitleBanner from "@/components/common/TitleBanner";
import { Inner } from "@/style/commonStyle";
import { NoticeData } from "@/types";

const categoryList = ["전체", "필독", "업데이트", "자료", "언론 보도"];

const NoticePage = () => {
  const [notice, setNotice] = useState<NoticeData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [category, setCategory] = useState<string>("전체");
  const [keyword, setKeyword] = useState<string>("");
  const [totalNotice, setTotalNotice] = useState<number>(0);

  const fetchNotice = async () => {
    const noticeData = await getNotice({ page });
    setNotice(noticeData.content);
    setTotalPage(noticeData.totalPages);
    setTotalNotice(noticeData.totalElements);
  };

  const fetchKeywordNotice = async (keyword: string) => {
    const noticeData = await getKeywordNotice({ keyword, page });
    setNotice(noticeData.content);
    setTotalPage(noticeData.totalPages);
    setTotalNotice(noticeData.totalElements);
  };

  const fetchCategoryNotice = async (category: string) => {
    const noticeData = await getCategoryNotice({ category, page });
    setNotice(noticeData.content);
    setPage(1);
    setTotalPage(noticeData.totalPages);
    setTotalNotice(noticeData.totalElements);
  };

  useEffect(() => {
    if (keyword !== "") fetchKeywordNotice(keyword);
    else if (category === "전체") fetchNotice();
    else fetchCategoryNotice(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <React.Fragment>
      <Container>
        <Inner>
          <TitleBanner
            title="공지사항"
            subTitle="하이카디와 관련된 소식을 전달해 드립니다."
          />
          <CategoryBar
            categoryList={categoryList}
            category={category}
            keyword={keyword}
            setCategory={setCategory}
            setKeyword={setKeyword}
            setPage={setPage}
            getData={fetchNotice}
            getKeywordData={fetchKeywordNotice}
            getCategoryData={fetchCategoryNotice}
          />
          <NoticeTable
            notice={notice}
            page={page}
            totalNotice={totalNotice}
          />
          <Pagination
            currentPage={page}
            setCurrentPage={setPage}
            totalPage={totalPage}
          />
        </Inner>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 100px;
`;

export default NoticePage;
