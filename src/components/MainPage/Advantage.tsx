/* import styled from "styled-components";

import MainImg from "@/assets/figure/img_advantage_1.svg"; */
/* import SubImg from "@/assets/figure/img_advantage_2.svg"; */

import styled, { css } from "styled-components";

import SubImg from "@/assets/figure/img_advantage_1.svg";
import { Position } from "@/types";

import AdvantageElement from "./AdvantageElement";
import Title from "./Title";

const Advantage = () => {
  return (
    <div>
      <Title
        titleEn="HiCardi's unique advantages"
        titleKo="하이카디만의 장점"
      />
      <InnerAdvantage>
        <ElementContainer position="upper">
          <div className="subImg" />
          <AdvantageElement
            position="upper"
            title="전 연령 사용 가능"
          >
            <p>
              <span>하이카디는 소아/신생아용 홀터 진단에서 요구하는</span>
              <span>시험결과를 제출해 인증받은 제품이므로,</span>
              <span>소야 및 신생아에게도 사용이 가능합니다.</span>
            </p>
          </AdvantageElement>
          <AdvantageElement
            position="upper"
            title="전 연령 사용 가능"
          >
            <p>
              <span>하이카디는 소아/신생아용 홀터 진단에서 요구하는</span>
              <span>시험결과를 제출해 인증받은 제품이므로,</span>
              <span>소야 및 신생아에게도 사용이 가능합니다.</span>
            </p>
          </AdvantageElement>
          <AdvantageElement
            position="upper"
            title="전 연령 사용 가능"
          >
            <p>
              <span>하이카디는 소아/신생아용 홀터 진단에서 요구하는</span>
              <span>시험결과를 제출해 인증받은 제품이므로,</span>
              <span>소야 및 신생아에게도 사용이 가능합니다.</span>
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
            title="전 연령 사용 가능"
          >
            <p>
              <span>하이카디는 소아/신생아용 홀터 진단에서 요구하는</span>
              <span>시험결과를 제출해 인증받은 제품이므로,</span>
              <span>소야 및 신생아에게도 사용이 가능합니다.</span>
            </p>
          </AdvantageElement>
          <div className="subImg" />
        </ElementContainer>
      </InnerAdvantage>
    </div>
  );
};

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
