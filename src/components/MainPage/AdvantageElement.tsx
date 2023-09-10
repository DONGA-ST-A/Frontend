import styled, { css } from "styled-components";

import MainImg from "@/assets/figure/img_advantage_2.svg";
import { AdvantageProps, Position } from "@/types";

const AdvantageElement = ({ position, title, children }: AdvantageProps) => {
  return (
    <Container position={position}>
      <Background position={position} />
      <div className="text-container">
        <div className="title">{title}</div>
        {children}
      </div>
    </Container>
  );
};

const Container = styled.div<{ position: Position }>`
  width: 405px;
  height: 266px;
  position: relative;
  margin: 0px 10px;

  .text-container {
    position: absolute;
    top: ${(props) => (props.position === "upper" ? "18%" : "34%")};
    left: 0;
    text-align: center;
    width: inherit;
  }

  .title {
    font-family: NotoSansBold;
    font-size: 24px;
    line-height: 1.6em;
    margin-bottom: 15px;
  }

  p {
    font-family: NotoSansMedium;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    line-height: 1.6em;
    color: var(--color_sub3);
  }
`;

const Background = styled.div<{ position: Position }>`
  background-image: url(${MainImg});
  background-size: cover;
  width: inherit;
  height: inherit;
  ${(props) =>
    props.position === "bottom" &&
    css`
      transform: rotate(180deg);
    `};
`;

export default AdvantageElement;
