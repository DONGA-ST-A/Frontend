import { styled } from "styled-components";

import Logo from "@/assets/logo/logo_white.svg";

const Footer = () => {
  return (
    <Container>
      <InformationContainer>
        <img
          alt="logo"
          src={Logo}
          width="204"
        />
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

      <TermContainer>
        <Term>서비스 이용약관</Term>
        <Term>개인정보취급방침</Term>
        <Term>이용안내</Term>
      </TermContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1e1e1e;
  padding: 50px 60px 50px 60px;
  color: white;
`;

const InformationContainer = styled.div`
  /* TODO: 폰트랑 폰트 사이즈 적용 후 height 재설정 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 427px;
`;

const TextContainer = styled.div`
  flex-direction: column;
  font-family: NotoSansRegular;
  font-size: 16px;
  color: var(--color_white);
  line-height: 1.6em;
`;

const TermContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: var(--color_white);
  font-family: NotoSansMedium;
  font-size: 20px;
`;

const Term = styled.div`
  /* TODO: 폰트 관련 설정 및 언더라인 설정 */
  padding-bottom: 20px;
`;

export default Footer;
