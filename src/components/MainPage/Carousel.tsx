import Slider from "react-slick";
import styled from "styled-components";

import arrow1 from "@/assets/carousel/carousel_arrow.svg";
import { Inner } from "@/style/commonStyle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselElement from "./CarouselElement";

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
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
          <CarouselElement />
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

  .slick-dots li button:before {
    width: 20px;
    height: 20px;
    color: var(--color_white);
    border-radius: 50%;
    display: inline-block;
    line-height: 12px;
    font-size: 12px;
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
