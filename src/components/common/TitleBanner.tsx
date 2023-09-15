import styled from "styled-components";

const TitleBanner = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <Banner>
      <h1>{title}</h1>
      <div>{subTitle}</div>
    </Banner>
  );
};

const Banner = styled.div`
  padding-bottom: 33px;

  h1 {
    font-family: NotoSansBold;
    font-size: var(--text_title1);
    color: var(color_font);
    margin-bottom: 40px;
  }

  div {
    font-family: NotoSansMedium;
    font-size: var(--text_body1);
    color: var(--color_sub3);
  }
`;

export default TitleBanner;
