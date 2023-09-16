import styled from "styled-components";

import Img1 from "@/assets/figure/img_rd_1.svg";
import Img2 from "@/assets/figure/img_rd_2.svg";
import Img3 from "@/assets/figure/img_rd_3.svg";
import Img4 from "@/assets/figure/img_rd_4.svg";
import { Inner } from "@/style/commonStyle";

import CompanyTitle from "./CompanyTitle";

const RnDList = [
  {
    img: Img1,
    title: "비전 및 전략",
    description: "신약개발을 향한 집념으로\n꾸준한 R&D 투자를 지속하고 있습니다.",
  },
  { img: Img2, title: "성과", description: "인류 건강을 위한\n동아ST의 의지가 담긴 성과입니다." },
  {
    img: Img3,
    title: "파이프라인",
    description: "끊임없는 연구개발 결과 신약을 포함한\n다양한 프로젝트로 확장되었습니다.",
  },
  {
    img: Img4,
    title: "License-in/Out",
    description:
      "상호신뢰를 바탕으로 다양한 유형의 제휴를 통하여\n상생협력 기회를 모색하고 있습니다.",
  },
];

const RnD = () => {
  return (
    <Container>
      <Inner>
        <CompanyTitle title="R&D" />
        <RnDContainer>
          {RnDList.map((item) => (
            <RnDItem>
              <img
                alt={item.description}
                src={item.img}
              />
              <div className="text-container">
                <div className="title">{item.title}</div>
                <p>{item.description}</p>
              </div>
            </RnDItem>
          ))}
        </RnDContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color_sub5);
  padding-top: 54px;
  padding-bottom: 80px;
  text-align: center;
`;

const RnDContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RnDItem = styled.div`
  background-color: var(--color_white);

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--color_font);

    padding-top: 19px;
    padding-bottom: 25px;

    .title {
      font-family: NotoSansBold;
      font-size: var(--text_caption1);
    }

    p {
      font-family: NotoSansMedium;
      font-size: 12px;
      white-space: pre-line;
      line-height: 1.6em;
    }
  }
`;
export default RnD;
