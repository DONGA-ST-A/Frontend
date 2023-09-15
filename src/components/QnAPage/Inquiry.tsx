import styled from "styled-components";

const Inquiry = () => {
  return (
    <Container>
      <div>궁금증이 해결되지 않았다면?</div>
      <button>1:1 문의하기</button>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color_sub5);
  text-align: center;
  padding: 70px 0px;

  div {
    font-family: NotoSansMedium;
    color: var(--color_sub3);
    font-size: var(--text_body2);
    padding-bottom: 16px;
  }

  button {
    border: solid 1px;
    border-color: var(--color_sub1);
    border-radius: 36px;
    background-color: var(--color_white);
    font-family: NotoSansBold;
    font-size: var(--text_body1);
    color: var(--color_font);
    padding: 12px 67px;
    cursor: pointer;
  }
`;

export default Inquiry;
