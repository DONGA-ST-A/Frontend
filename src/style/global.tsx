// 전역 스타일 내용 들어갈 예정

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
  }
}
`;
