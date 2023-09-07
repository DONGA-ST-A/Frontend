import { styled } from "styled-components";

const Footer = () => {
  return (
    <Container>
      <InformationContainer>
        {/* TODO: 기업 로고 넣기 */}
        <TextContainer>
          <div>사업자등록번호 | 204-86-40122</div>
          <div>상호 | 동아에스티(주)</div>
          <div>대표자명 | 김민영</div>
          <div>전화번호 | 02-920-8406</div>
          <div>주소 | 서울특별시 동대문구 천호대로 64</div>
          <div>통신판매업신고번호 | 제2022-서울동대문-1374호</div>
          <div>의료기기판매업번호 | 제2003-3050034-00003호</div>
          <div>&nbsp;</div>
          <div>Copyright ⓒ 2022 DongA ST Inc.All Rights Reserved.</div>
          <div>Hosting by cafe24</div>
        </TextContainer>
      </InformationContainer>
      `
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
