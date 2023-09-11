import styled from "styled-components";

import carouselImg from "@/assets/carousel/example_carousel.svg";
import { carouselProps } from "@/types";

import ArrowBtn from "./ArrowBtn";

const CarouselElement = ({ title, semiTitle, description, BtnText, BtnLink }: carouselProps) => {
  return (
    <Container>
      <ElementInner>
        <TitleContainer>
          <div className="title">
            <VerticalLine />
            <TitleText>
              <Title>{title}</Title>
              <SemiTitle>{semiTitle}</SemiTitle>
            </TitleText>
          </div>
          <div className="description">{description}</div>
          <ArrowBtn
            text={BtnText}
            link={BtnLink}
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
  white-space: pre-wrap;
  .title {
    display: flex;
    height: auto;
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
  height: auto;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export default CarouselElement;
