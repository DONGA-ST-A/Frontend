import styled from "styled-components";

import background from "@/assets/background/learn_more.svg";

import ArrowBtn from "./ArrowBtn";

const LearnMore = () => {
  return (
    <Container>
      <InnerLearnMore>
        <div className="text">
          <h1>하이카디가 당신의 환자를 24시간 돌봐드립니다.</h1>
          <p>하이카디에 대해 더 알아 볼까요?</p>
          <ArrowBtn
            text="1:1 문의하기"
            link="/"
          />
        </div>
      </InnerLearnMore>
      <Background></Background>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;
const InnerLearnMore = styled.div`
  width: 100%;
  height: 756px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  .text {
    z-index: 9;
    color: var(--color_white);
    width: 955px;
    text-align: center;
  }

  .text h1 {
    font-family: NotoSansBold;
    font-size: 48px;
  }

  .text p {
    font-family: NotoSansMedium;
    font-size: 32px;
    margin: 32px auto 32px;
  }
`;

const Background = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 756px;
  filter: blur(4px);
  -webkit-filter: blur(4px);
  transform: scale(1.02);
`;

export default LearnMore;
