import styled from "styled-components";

import carouselImg from "@/assets/carousel/example_carousel.svg";

import ArrowBtn from "./ArrowBtn";

const CarouselElement = () => {
  return (
    <Container>
      <ElementInner>
        <TitleContainer>
          <div className="title">
            <VerticalLine />
            <TitleText>
              <Title>하이카디 플러스 HiCardi +</Title>
              <SemiTitle>실시간 원격 환자 모니터링 솔루션</SemiTitle>
            </TitleText>
          </div>
          <div className="description">
            더 나은 삶을 위한 솔루션
            <br />
            하이카디 플러스로 편리하게 심전도 측정, 전송 및 분석까지
          </div>
          <ArrowBtn
            text="자세히 보기"
            link="/"
          />
        </TitleContainer>
        <img
          className="carouselImg"
          src={carouselImg}
          alt="케러셀 이미지"
          width={439}
        />
      </ElementInner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 536px;
  background-color: var(--color_sub4);
`;

const ElementInner = styled.div`
  width: calc(100% - 114px);
  height: inherit;
  background-color: var(--color_sub4);
  margin: 0 auto;
  display: flex;
  position: relative;

  .carouselImg {
    position: absolute;
    right: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
  }
  .description {
    font-family: NotoSansMedium;
    color: var(--color_font);
    font-size: var(--text_body1);
    margin: 64px 0 80px;
    margin-left: 30px;
    line-height: 1.6em;
  }
`;
const TitleText = styled.div`
  margin-left: 24px;
`;
const Title = styled.div`
  color: var(--color_main_skyblue);
  font-size: 48px;
  font-family: NotoSansBold;
  line-height: 1.6em;
`;

const SemiTitle = styled.div`
  color: var(--color_font);
  font-size: var(--text_subtitle1);
  font-family: NotoSansBold;
  line-height: 1.6em;
`;

const VerticalLine = styled.div`
  content: "";
  background-color: var(--color_main_skyblue);
  width: 4px;
  border-radius: 6px;
  height: 110px;
  margin: auto 0;
`;

export default CarouselElement;
