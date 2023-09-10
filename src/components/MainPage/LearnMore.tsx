import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import background from "@/assets/background/learn_more.svg";
import arrow from "@/assets/icon/icon_right_arrow.svg";

const LearnMore = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <InnerLearnMore>
        <div className="text">
          <h1>하이카디가 당신의 환자를 24시간 돌봐드립니다.</h1>
          <p>하이카디에 대해 더 알아 볼까요?</p>
          <button onClick={() => navigate("/")}>
            <div>더 알아보기</div>
            <img
              src={arrow}
              alt="화살표"
              width={18}
            />
          </button>
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
    font-weight: 700;
  }

  .text h1 {
    font-family: Noto SansBold;
    font-size: 48px;
  }

  .text p {
    font-family: NotoSansRegular;
    font-size: 32px;
    margin: 32px auto 32px;
    font-weight: 500;
  }
  .text button {
    width: 210px;
    height: 56px;
    border-radius: 36px;
    font-weight: 700;
    background-color: var(--color_white);
    color: var(--color_font);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-family: Noto SansBold;
    font-size: var(--text_body1);
    gap: 12px;
    text-align: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-use-select: none;
    user-select: none;
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
