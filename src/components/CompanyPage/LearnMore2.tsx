import styled from "styled-components";

import BackgroundImg from "@/assets/background/learn_more_2.svg";

const LearnMore2 = () => {
  return (
    <Container>
      <Background />
      <TextContainer>
        <div>동아ST에 대해 더 알아보기</div>
        <button>
          <a href="http://www.donga-st.com/html/">동아ST 공식 홈페이지</a>
        </button>
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
  min-height: 407px;
  background-size: cover;
  background-position: center;
`;
const TextContainer = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(2, 32, 41, 0.5);
  width: inherit;
  min-height: 407px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  div {
    color: var(--color_white);
    font-family: NotoSansMedium;
    font-size: var(--text_subtitle1);
  }

  button {
    color: var(--color_font);
    font-family: NotoSansBold;
    font-size: var(--text_body1);
    background-color: var(--color_white);
    border: solid 1px;
    border-color: var(--color_sub1);
    border-radius: 30px;
    padding: 12px 44px;
  }
`;
export default LearnMore2;
