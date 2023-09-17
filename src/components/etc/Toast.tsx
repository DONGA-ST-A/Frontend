import { styled } from "styled-components";

import ToastCheck from "@/assets/icon/toast_check_icon.svg";

const Toast = ({ message }: { message: string }) => {
  return (
    <Container>
      <Box>
        <div className="sqaure">
          <img
            src={ToastCheck}
            alt="check"
          />
        </div>
        <div>{message}</div>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  font-family: NotoSansBold;
  font-size: 18px;
  line-height: 1.6em;
  text-align: center;
  color: var(--color_font);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
`;

const Box = styled.div`
  height: 135px;
  width: 390px;
  background-color: var(--color_white);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  animation: slideUp 1s;

  .sqaure {
    width: 24px;
    height: 24px;
    background-color: var(--color_font);
    border: 1px solid var(--color_font);
    border-radius: 4px;
    margin-bottom: 16px;
    @keyframes slideUp {
      0% {
        transform: translateY(30px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`;

export default Toast;
