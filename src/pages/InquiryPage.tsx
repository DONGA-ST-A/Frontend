import styled from "styled-components";

import InquiryTable from "@/components/InquiryPage/InquiryTable";
import TitleBanner from "@/components/common/TitleBanner";
import { Inner } from "@/style/commonStyle";

const InquiryPage = () => {
  return (
    <Container>
      <Inner>
        <TitleBanner
          title="1:1 문의"
          subTitle="구매하시려는 제품에 대해 궁금한 점이 있으면 문의주세요."
        />
        <InquiryTable />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 245px;
`;

export default InquiryPage;
