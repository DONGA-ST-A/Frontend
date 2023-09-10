import styled, { css } from "styled-components";

import SubImg from "@/assets/figure/img_advantage_1.svg";
import { Position } from "@/types";

import AdvantageElement from "./AdvantageElement";
import Title from "./Title";

const Advantage = () => {
  return (
    <Container>
      <Title
        titleEn="HiCardi's unique advantages"
        titleKo="하이카디만의 장점"
      />
      <InnerAdvantage>
        <ElementContainer position="upper">
          <div className="subImg" />
          <AdvantageElement
            position="upper"
            title="높은 방수 등급 (IP67)"
          >
            <p>
              <span>하이카디는 식약처 및 CE인증 제품입니다.</span>
              <span>간단한 샤워가 가능하여 탈착하지 않으므로</span>
              <span>검사의 정확도가 월등합니다.</span>
            </p>
          </AdvantageElement>
          <AdvantageElement
            position="upper"
            title="선형 모델의 구조적 문제 해결"
          >
            <p>
              <span>선형 모델을 선을 건드릴 경우 노이즈가 발생하여</span>
              <span>데이터 정확도가 떨어지거나 탈착 가능성이 높습니다.</span>
              <span>하이카디는 일체형으로, 이와 같은 문제가 발생하지 않습니다.</span>
            </p>
          </AdvantageElement>
          <AdvantageElement
            position="upper"
            title="간단한 착용"
          >
            <p>
              <span>18g의 가벼운 무게를 지닌 일체형 모델로,</span>
              <span>착용이 쉽습니다.</span>
            </p>
          </AdvantageElement>
          <div className="subImg" />
        </ElementContainer>
        <ElementContainer position="bottom">
          <div className="subImg" />
          <AdvantageElement
            position="bottom"
            title="전 연령 사용 가능"
          >
            <p>
              <span>하이카디는 소아/신생아용 홀터 진단에서 요구하는</span>
              <span>시험결과를 제출해 인증받은 제품이므로,</span>
              <span>소야 및 신생아에게도 사용이 가능합니다.</span>
            </p>
          </AdvantageElement>
          <AdvantageElement
            position="bottom"
            title="제세동기 사용 가능"
          >
            <p>
              <span>Defilbrillation Protection 기능이 탑재되어</span>
              <span>착용한 상태로 제세동기 사용이 가능합니다.</span>
            </p>
          </AdvantageElement>
          <div className="subImg" />
        </ElementContainer>
      </InnerAdvantage>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 115px;
  padding-bottom: 165px;
`;

const InnerAdvantage = styled.div`
  max-width: 1440px;
  min-width: 1064px;
  height: 470px;
  margin: 0 auto;
  margin-top: 120px;
  padding: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ElementContainer = styled.div<{ position: Position }>`
  display: flex;
  flex-direction: row;
  width: max-content;
  .subImg {
    background-image: url(${SubImg});
    background-size: cover;
    width: 405px;
    height: 266px;
    position: relative;
    margin: 0px 10px;
  }
  ${(props) =>
    props.position === "bottom" &&
    css`
      .subImg {
        transform: rotate(180deg);
      }
      position: absolute;
      bottom: 0;
    `};
`;

export default Advantage;
