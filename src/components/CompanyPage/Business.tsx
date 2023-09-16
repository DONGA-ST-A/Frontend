import styled from "styled-components";

import Img1 from "@/assets/figure/img_business_1.svg";
import Img2 from "@/assets/figure/img_business_2.svg";
import Img3 from "@/assets/figure/img_business_3.svg";
import Img4 from "@/assets/figure/img_business_4.svg";
import { Inner } from "@/style/commonStyle";

import CompanyTitle from "./CompanyTitle";

const businessList = [
  {
    img: Img1,
    title: "의료 기기",
    description: "행복을 위한 최첨단 하이테크\n의료기기사업부가 시작합니다.",
  },
  {
    img: Img2,
    title: "진단",
    description: "건강한 삶을 통한 행복 추구,\n진단사업부가 함께 합니다",
  },
  {
    img: Img3,
    title: "해외 사업",
    description: "동아ST는 글로벌 시장으로의 진출을\n활발히 하고 있습니다",
  },
  {
    img: Img4,
    title: "생산",
    description:
      "동아ST는 글로벌 GMP 규정에 따른 품질 시스템을 운영하여,\n우수한 의약품 품질을 확보하는 데 최선을 다하고 있습니다",
  },
];

const Business = () => {
  return (
    <Container>
      <Inner>
        <CompanyTitle title="사업 분야" />
        <InnerContainer>
          {businessList.map((item) => (
            <BusinessContainer>
              <img
                alt={item.title}
                src={item.img}
              />
              <div className="text-container">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </BusinessContainer>
          ))}
        </InnerContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color_white);
  text-align: center;
  padding: 86px 0px;
`;

const InnerContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
`;

const BusinessContainer = styled.div`
  position: relative;

  img {
    width: 600px;
    height: 335px;
  }

  .text-container {
    position: absolute;
    top: 0;
    color: var(--color_white);
    background-color: rgba(2, 32, 41, 0.5);
    width: 600px;
    height: 335px;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    h1 {
      font-family: NotoSansBold;
      font-size: var(--text_title1);
    }

    p {
      font-family: NotoSansmMedium;
      font-size: var(--text_body1);
      white-space: pre-line;
      line-height: 1.6em;
    }
  }
`;

export default Business;
