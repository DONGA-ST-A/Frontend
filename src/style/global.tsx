// 전역 스타일 내용 들어갈 예정

import { createGlobalStyle } from "styled-components";

import "./color.css";
import "./font.css";
import NotoSansBold from "@/style/fonts/NotoSansKR-Bold.woff";
import NotoSansMedium from "@/style/fonts/NotoSansKR-Medium.woff";
import NotoSansRegular from "@/style/fonts/NotoSansKR-Regular.woff";
import "./mobile.css";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
  text-decoration: none;
  color: inherit;
}


@font-face { //font-weight 400
  font-family: NotoSansRegular;
  src: url(${NotoSansRegular}) format('woff');
  font-style: normal;
}
@font-face { //font-weight 500
  font-family: NotoSansMedium;
  src: url(${NotoSansMedium}) format('woff');
  font-style: normal;
}
@font-face { //font-weight 700
  font-family: NotoSansBold;
  src: url(${NotoSansBold}) format('woff');
  font-style: normal;
}
`;
