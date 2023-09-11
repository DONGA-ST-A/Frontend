import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import arrow from "@/assets/icon/icon_right_arrow.svg";
import { ArrowBtnProps } from "@/types";

const ArrowBtn = ({ text, link }: ArrowBtnProps) => {
  const navigate = useNavigate();
  return (
    <Btn
      onClick={() => navigate(link)}
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
  margin: ${(props) => (props.text !== "더 알아보기" ? "0 0 0 30px" : "0 auto")};
  font-family: NotoSansBold;
  font-size: var(--text_body1);
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
