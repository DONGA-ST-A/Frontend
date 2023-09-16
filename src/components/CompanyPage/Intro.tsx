import styled from "styled-components";

import BackgroundImg from "@/assets/background/company_introduction.svg";

const Intro = () => {
  return (
    <Container>
      <Background />
      <TextContainer>
        <h1>COMPANY</h1>
        <span>글로벌 제약기업을 향해 도약하는 동아ST입니다.</span>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Background = styled.div`
  background-image: url(${BackgroundImg});
  min-height: 390px;
  background-size: cover;
  background-position: center;
`;
const TextContainer = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(2, 32, 41, 0.5);
  width: inherit;
  min-height: 390px;
  color: var(--color_white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  h1 {
    font-family: NotoSansBold;
    font-size: var(--text_title1);
  }

  span {
    font-family: NotoSansMedium;
    font-size: var(--text_body1);
  }
`;
export default Intro;
