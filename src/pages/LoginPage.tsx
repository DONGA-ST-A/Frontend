import { ChangeEvent, useState } from "react";

import styled from "styled-components";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault;
  };
  return (
    <Container>
      <div className="title">
        <h1>로그인</h1>
        <span className="description">
          회원이 되시면 다양한 혜택과 서비스를 받으실 수 있습니다.
        </span>
      </div>
      <LoginForm onSubmit={handleSubmit}>
        <fieldset>
          <input
            name="id"
            value={userData.id}
            placeholder="아이디"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            placeholder="비밀번호"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <button className="login-btn">로그인</button>
          <button className="register-btn">회원가입</button>
        </fieldset>
      </LoginForm>
      <div className="find">
        <span>아이디 찾기</span>
        <div>|</div>
        <span>비밀번호 찾기</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 100px;
  margin-bottom: 100px;

  .title {
    text-align: center;
    h1 {
      font-family: NotoSansBold;
      font-size: var(--text_title1);
      color: var(--color_font);
      margin-bottom: 20px;
    }

    .description {
      font-family: NotoSansMedium;
      font-size: var(--text_body1);
      color: var(--color_sub2);
    }
  }

  .find {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;

    span {
      font-family: NotoSansMedium;
      font-size: var(--text_body1);
      color: var(--color_sub3);
      cursor: pointer;
    }
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 22px;

    input {
      background-color: var(--color_background);
      padding: 20px 58px;
      border: none;
      border-radius: 30px;
      font-family: NotoSansMedium;
      font-size: var(--text_body1);
      color: var(--color_font);

      &::placeholder {
        color: var(--color_sub2);
      }

      &:focus {
        outline: none;
      }
    }

    button {
      font-family: NotoSansBold;
      font-size: var(--text_body1);
      border-radius: 30px;
      padding: 20px 0px;
      cursor: pointer;
    }

    .login-btn {
      border: none;
      background-color: var(--color_main_skyblue);
      color: var(--color_white);
    }

    .register-btn {
      border: 1px solid;
      border-color: var(--color_sub2);
      background-color: var(--color_white);
      color: var(--color_sub3);
    }
  }
`;

export default LoginPage;
