import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { carouselState } from "@/Atoms";
import arrow from "@/assets/icon/icon_right_arrow.svg";
import { ArrowBtnProps } from "@/types";

const ArrowBtn = ({ text, link }: ArrowBtnProps) => {
  const navigate = useNavigate();
  const setCarousel = useSetRecoilState(carouselState);
  return (
    <Btn
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (link === "/product/1" && text === "사용법 보기") {
          setCarousel(true);
        }
        navigate(link);
      }}
      text={text}
    >
      <div>{text}</div>
      <img
        src={arrow}
        alt="화살표"
        width={18}
      />
    </Btn>
  );
};

const Btn = styled.div<{ text: string }>`
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
  margin: ${(props) => (props.text !== "1:1 문의하기" ? "0 0 0 30px" : "0 auto")};
  font-family: NotoSansBold;
  font-size: 20px;
  gap: 12px;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
  line-height: normal;
`;

export default ArrowBtn;
