import { styled } from "styled-components";

const Inner = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0;
  position: relative;
`;

export { Inner };

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  margin-left: 24px;
`;

export const TitleEn = styled.div`
  color: var(--color_sub2);
  font-size: var(--text_body2);
  font-family: NotoSansMedium;
  line-height: 1.6em;
`;

export const TitleKo = styled.div`
  color: var(--color_font);
  font-size: var(--text_title1);
  font-family: NotoSansBold;
  line-height: 1.6em;
`;

export const VerticalLine = styled.div`
  content: "";
  background-color: var(--color_main_skyblue);
  width: 4px;
  border-radius: 6px;
  height: 90px;
`;
