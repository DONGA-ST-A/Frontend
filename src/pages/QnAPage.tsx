import React from "react";

import styled from "styled-components";

import Inquiry from "@/components/QnAPage/Inquiry";
import QnACategoryBar from "@/components/QnAPage/QnACategoryBar";
import { Inner } from "@/style/commonStyle";

const QnAPage = () => {
  return (
    <React.Fragment>
      <Inner>
        <Banner>
          <h1>QnA</h1>
          <div>구매하시려는 제품에 대해 궁금한 점이 있으면 문의해주세요.</div>
        </Banner>
        <QnACategoryBar />
      </Inner>
      <Inquiry />
    </React.Fragment>
  );
};

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
