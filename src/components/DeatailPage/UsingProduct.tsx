import { useState } from "react";

import { styled } from "styled-components";

import { UsingGif } from "@/types";

const UsingProduct = ({ img, gif, text, subText }: UsingGif) => {
  const [play, setPlay] = useState(false);
  return (
    <Container>
      <img
        className="gifAltimg"
        onMouseOver={() => setPlay(true)}
        src={img}
        alt="사용법"
      />
      {play ? (
        <img
          onMouseOut={() => setPlay(false)}
          className="gif"
          src={gif}
          alt="gif"
          width={473}
        />
      ) : (
        ""
      )}
      <div className="text">{text}</div>
      <div className="subtext">{subText}</div>
    </Container>
  );
};
const Container = styled.div`
  width: 47%;
  height: 700px;
  border-radius: 34.5px;
  background: var(--color_sub5, #eff6f8);
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  position: relative;
  .gifAltimg {
    display: block;
    zoom: 1.7;
    margin: 35px auto 0;
    cursor: pointer;
  }
  .gif {
    display: block;
    border: 3px solid var(--color_main_skyblue);
    border-radius: 10px;
    position: absolute;
    zoom: 1.7;
    left: 0;
    right: 0;
    margin: 25px auto 0;
    cursor: pointer;
    transform: scale(1.2);
  }
  .text {
    color: var(--color_font, #1e1e1e);
    text-align: center;
    font-family: NotoSansMedium;
    font-size: 36px;
    line-height: 1.6em;
    white-space: pre-wrap;
    margin: 70px auto 0;
  }
  .subtext {
    color: #cf357a;
    text-align: center;
    font-family: NotoSansMedium;
    font-size: 30px;
    line-height: 1.6em;
    margin: 30px auto 0;
  }
`;
export default UsingProduct;
