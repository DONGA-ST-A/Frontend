import styled from "styled-components";

const Slogan = () => {
  return (
    <Container>
      <SloganText>언제, 어디서나 환자의 상태를 실시간으로 모니터링 할 수 있습니다</SloganText>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background-color: var(--color_white);
  padding: 42px 0 0;
`;
const SloganText = styled.div`
  color: var(--color_main_skyblue);
  font-size: 48px;
  font-family: NotoSansMedium;
  line-height: 1.6em;
  text-align: center;
  margin-bottom: 85px;
  padding: 0 20px;
`;

export default Slogan;
