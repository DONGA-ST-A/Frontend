import Slider from "react-slick";
import styled from "styled-components";

import arrow1 from "@/assets/carousel/carousel_arrow.svg";
import { Inner } from "@/style/commonStyle";
import { carouselProps } from "@/types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselElement from "./CarouselElement";

const dummydata: carouselProps[] = [
  {
    title: "하이카디 플러스 HiCardi +",
    semiTitle: "실시간 원격 환자 모니터링 솔루션",
    description:
      "더 나은 삶을 위한 솔루션\n하이카디 플러스로 편리하게 심전도 측정, 전송 및 분석까지",
    BtnText: "자세히 보기",
    BtnLink: "/",
  },
  {
    title: "하이카디 플러스 HiCardi +\n사용법 바로가기",
    semiTitle: "",
    description: "하이카디를 처음 접하셨나요?\n사용법을 확인하고 체험해보세요.",
    BtnText: "사용법 보기",
    BtnLink: "/",
  },
  {
    title: "하이카디와 함께 사용하면\n좋은 제품",
    semiTitle: "원격 판독권, 심전도 리필 등",
    description: "하이카디와 함께 사용하면\n보다 편리하게 환자를 모니터링 할 수 있습니다.",
    BtnText: "제품 보러가기",
    BtnLink: "/",
  },
];

const REACT_SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 4000,
};

const Carousel = () => {
  return (
    <Container>
      <Inner>
        <Slider {...REACT_SLIDER_SETTINGS}>
          {dummydata.map((item) => (
            <CarouselElement
              title={item.title}
              semiTitle={item.semiTitle}
              description={item.description}
              BtnText={item.BtnText}
              BtnLink={item.BtnLink}
            />
          ))}
        </Slider>
      </Inner>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 766px;
  background-color: var(--color_sub4);

  .slick-slider {
    padding-top: 136px;
  }
  .slick-dots {
    position: absolute;
    bottom: 0;
    padding: 0 0 0 65px;
  }

  .slick-prev {
    left: -15px;
  }
  .slick-next {
    right: -15px;
  }
  .slick-prev,
  .slick-next {
    position: absolute;
    width: 57px;
    height: 57px;
    z-index: 1;
    bottom: 236px;
    transform: translate(0);
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
  }
  .slick-prev:before,
  .slick-next:before {
    content: "";
    display: block;
    width: 57px;
    height: 57px;
    border-radius: 50%;
    background-color: var(--color_white);
    background-image: url(${arrow1});
    background-repeat: no-repeat;
    background-position: center;
    background-position-x: 24px;
  }
  .slick-prev:before {
    transform: rotate(180deg);
  }
  .slick-dots li {
    width: 55px;
    line-height: 12px;
    opacity: 1;
  }
  .slick-dots li button {
    background: var(--color_white);
    border-radius: 50%;
    width: 12px;
    height: 12px;
  }

  .slick-dots li button:before {
    font-size: 0;
  }

  .slick-dots li.slick-active button:before {
    content: "";
    display: block;
    width: 88px;
    height: 12px;
    background-color: var(--color_main_skyblue);
    border-radius: 12px;
    line-height: 12px;
    opacity: 1;
    color: var(--color_main_skyblue);
    position: absolute;
    left: -38px;
  }
`;

export default Carousel;
