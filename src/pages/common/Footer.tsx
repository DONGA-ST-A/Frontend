import { styled } from "styled-components";

const Footer = () => {
  return (
    <Container>
      <InformationContainer>
        {/* TODO: 기업 로고 넣기 */}
        <TextContainer>
          <div>사업정보</div>
          <div>사업정보</div>
        </TextContainer>
      </InformationContainer>
      <TermContainer>
        <Term>약관정보</Term>
      </TermContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1e1e1e;
  padding: 30px;
  color: white;
`;

const InformationContainer = styled.div`
  /* TODO: 배경색 삭제 */
  /* TODO: 로고랑 TextContainer 사이에 여백 넣기 */
  background-color: green;
`;

const TextContainer = styled.div`
  /* TODO: 폰트 관련 설정 */
  flex-direction: column;
`;

const TermContainer = styled.div`
  /* TODO: Term 사이 간격 조절 */
  background-color: #e4e4e4;
`;

const Term = styled.div`
  /* TODO: 폰트 관련 설정 및 언더라인 설정 */
`;

export default Footer;
