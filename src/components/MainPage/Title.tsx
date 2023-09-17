import styled from "styled-components";

const Title = ({ titleEn, titleKo }: { titleEn: string; titleKo: string }) => {
  return (
    <TitleContainer>
      <VerticalLine />
      <TitleText>
        <TitleEn>{titleEn}</TitleEn>
        <TitleKo>{titleKo}</TitleKo>
      </TitleText>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleText = styled.div`
  margin-left: 24px;
`;

const TitleEn = styled.div`
  color: var(--color_sub2);
  font-size: 20px;
  font-family: NotoSansMedium;
  line-height: 1.6em;
`;

const TitleKo = styled.div`
  color: var(--color_font);
  font-size: 40px;
  font-family: NotoSansBold;
  line-height: 1.6em;
`;

const VerticalLine = styled.div`
  content: "";
  background-color: var(--color_main_skyblue);
  width: 4px;
  border-radius: 6px;
  height: 90px;
`;

export default Title;
