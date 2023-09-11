import styled from "styled-components";

import MainImg from "@/assets/figure/img_problem.svg";

const MarketStatusElement = ({ title, description }: { title: string; description: string }) => {
  return (
    <Container>
      <img
        alt="main_img"
        src={MainImg}
      />
      <TextContainer>
        <h2>{title}</h2>
        <HorizontalLine />
        <p>{description}</p>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 196px;
  position: relative;
  margin: 0px 9px;

  img {
    width: 200px;
  }
`;
const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-family: NotoSansBold;
    font-size: 17px;
    color: var(--color_font);
  }

  p {
    font-family: NotoSansMedium;
    font-size: 13px;
    color: var(--color_sub3);
    line-height: 1.6em;
    white-space: pre-line;
  }
`;

const HorizontalLine = styled.div`
  content: "";
  background-color: var(--color_main_pink);
  width: 45px;
  height: 2.5px;
  border-radius: 6px;
  margin: 18px 0px;
`;
export default MarketStatusElement;
