// 전역 스타일 내용 들어갈 예정

import { createGlobalStyle } from "styled-components";
import "./color.css";
import "./font.css";

export const GlobalStyle = createGlobalStyle`
html {
  margin: 0;
  padding: 0;
  border: 0;
}

@font-face {
  font-family: NotoSansMedium;
  src: url('../../src/style/fonts/NotoSansKR-Medium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: NotoSansBold;
  src: url('../../src/style/fonts/NotoSansKR-Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-size: 48px;
}
`;
