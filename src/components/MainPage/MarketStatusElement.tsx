import styled from "styled-components";

import MainImg from "@/assets/figure/img_problem.svg";

const text = "적합한 기기 대신\n환자 감시장치가 사용되어\n가중되는 불편함";
const MarketStatusElement = () => {
  return (
    <Container>
      <img
        alt="main_img"
        src={MainImg}
      />
      <TextContainer>
        <h1>불편함</h1>
        <HorizontalLine />
        <p>{text}</p>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 196px;
  position: relative;

  img {
    width: 196px;
  }
`;
const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 163px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-family: NotoSansBold;
    font-size: 15px;
    color: var(--color_font);
  }

  p {
    font-family: NotoSansMedium;
    font-size: 11px;
    color: var(--color_sub3);
    line-height: 1.6em;
    white-space: pre-line;
  }
`;

const HorizontalLine = styled.div`
  content: "";
  background-color: var(--color_main_pink);
  width: 41px;
  height: 2.5px;
  border-radius: 6px;
  margin: 18px 0px;
`;
export default MarketStatusElement;
