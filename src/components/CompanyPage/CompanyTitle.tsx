import styled from "styled-components";

const CompanyTitle = ({ title }: { title: string }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h1`
  font-family: NotoSansBold;
  font-size: var(--text_title1);
  color: var(--color_font);
  margin-bottom: 60px;
`;

export default CompanyTitle;
