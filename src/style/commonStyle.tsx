import { styled } from "styled-components";

import TopArrowIcon from "@/assets/icon/icon_top_arrow.svg";

const Inner = styled.div`
  max-width: 1230px;
  min-width: 1064px;
  margin: 0 auto;
  padding: 0;
  position: relative;
`;

export { Inner };

export const TopButton = styled.button`
  background-image: url(${TopArrowIcon});
  border: none;
  border-radius: 50%;
  width: 57px;
  height: 57px;
  background-size: cover;
  background-position: center;
  &:hover {
    cursor: pointer;
  }
  position: fixed;
  bottom: 40px;
  right: 30px;
`;
